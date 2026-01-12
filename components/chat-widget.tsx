"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { MessageCircle, X, Send, Bot, User, Calendar, Search, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const quickActions = [
  {
    icon: Search,
    label: "Gratis AI Scan aanvragen",
    message: "Ik wil graag een gratis AI Scan aanvragen voor mijn organisatie.",
  },
  {
    icon: Calendar,
    label: "Afspraak inplannen",
    message: "Ik wil graag een vrijblijvend adviesgesprek inplannen.",
  },
  {
    icon: GraduationCap,
    label: "Training prijzen",
    message: "Wat kosten jullie AI trainingen?",
  },
  {
    icon: Bot,
    label: "Verschil tussen diensten",
    message: "Wat is het verschil tussen AI Automation, AI Advies en AI Training?",
  },
];

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) throw new Error("Failed to fetch");

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let assistantContent = "";

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "",
      };

      setMessages((prev) => [...prev, assistantMessage]);

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value);
          assistantContent += chunk;
          
          // Check for SEND_MESSAGE command
          const sendMessageMatch = assistantContent.match(/\[SEND_MESSAGE:name=([^|]+)\|email=([^|]+)\|phone=([^|]+)\|message=([^\]]+)\]/);
          
          if (sendMessageMatch) {
            const [fullMatch, name, email, phone, message] = sendMessageMatch;
            
            // Remove the command from the visible content
            const cleanContent = assistantContent.replace(fullMatch, "").trim();
            
            setMessages((prev) =>
              prev.map((m) =>
                m.id === assistantMessage.id
                  ? { ...m, content: cleanContent + "\n\n✉️ Ik verstuur je bericht..." }
                  : m
              )
            );
            
            // Send the message via API
            try {
              const sendResponse = await fetch("/api/chat-contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, phone, message }),
              });
              
              if (sendResponse.ok) {
                setMessages((prev) =>
                  prev.map((m) =>
                    m.id === assistantMessage.id
                      ? { ...m, content: cleanContent + "\n\n✅ Je bericht is verstuurd! Het Max Motion team neemt zo snel mogelijk contact met je op via e-mail of telefoon." }
                      : m
                  )
                );
              } else {
                setMessages((prev) =>
                  prev.map((m) =>
                    m.id === assistantMessage.id
                      ? { ...m, content: cleanContent + "\n\n❌ Er ging iets mis bij het versturen. Probeer het opnieuw of gebruik het contactformulier op /contact" }
                      : m
                  )
                );
              }
            } catch (sendError) {
              console.error("Send message error:", sendError);
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantMessage.id
                    ? { ...m, content: cleanContent + "\n\n❌ Er ging iets mis bij het versturen. Probeer het opnieuw of gebruik het contactformulier op /contact" }
                    : m
                )
              );
            }
            
            assistantContent = cleanContent;
          } else {
            setMessages((prev) =>
              prev.map((m) =>
                m.id === assistantMessage.id
                  ? { ...m, content: assistantContent }
                  : m
              )
            );
          }
        }
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "Sorry, er ging iets mis. Probeer het later opnieuw.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickAction = (message: string) => {
    setInput(message);
    setTimeout(() => {
      const form = document.getElementById("chat-form") as HTMLFormElement;
      if (form) {
        form.requestSubmit();
      }
    }, 100);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-all duration-300 ${
          isOpen
            ? "bg-gray-600 hover:bg-gray-700"
            : "bg-gradient-to-br from-[#FF6B35] to-[#F7931E] hover:from-[#F7931E] hover:to-[#FF6B35]"
        }`}
        aria-label={isOpen ? "Sluit chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Lynn</h3>
                <p className="text-sm text-white/80">Hoe kan ik je helpen?</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-[350px] overflow-y-auto p-4 bg-gray-50">
            {messages.length === 0 ? (
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#FF6B35] to-[#F7931E] flex-shrink-0">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="rounded-2xl rounded-tl-none bg-white p-3 shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-700">
                      Hoi! 👋 Ik ben Lynn. Hoe kan ik je helpen?
                    </p>
                    <p className="text-sm text-gray-700 mt-2">
                      Wil je een gratis AI Scan aanvragen, een afspraak inplannen, of meer weten over onze trainingen en prijzen? Kies hieronder een optie of stel me gerust een vraag!
                    </p>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-2 mt-4">
                  <p className="text-xs text-gray-500 font-medium px-1">Snelle acties:</p>
                  {quickActions.map((action) => {
                    const Icon = action.icon;
                    return (
                      <button
                        key={action.label}
                        onClick={() => handleQuickAction(action.message)}
                        className="flex w-full items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 text-left transition hover:border-[#FF6B35] hover:bg-orange-50 group"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 group-hover:bg-[#FF6B35] transition">
                          <Icon className="h-4 w-4 text-[#FF6B35] group-hover:text-white transition" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{action.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((message: { id: string; role: string; content: string }) => (
                  <div
                    key={message.id}
                    className={`flex items-start gap-3 ${
                      message.role === "user" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full flex-shrink-0 ${
                        message.role === "user"
                          ? "bg-gray-200"
                          : "bg-gradient-to-br from-[#FF6B35] to-[#F7931E]"
                      }`}
                    >
                      {message.role === "user" ? (
                        <User className="h-4 w-4 text-gray-600" />
                      ) : (
                        <Bot className="h-4 w-4 text-white" />
                      )}
                    </div>
                    <div
                      className={`rounded-2xl p-3 max-w-[80%] ${
                        message.role === "user"
                          ? "rounded-tr-none bg-[#FF6B35] text-white"
                          : "rounded-tl-none bg-white shadow-sm border border-gray-100"
                      }`}
                    >
                      <p className={`text-sm whitespace-pre-wrap ${
                        message.role === "user" ? "text-white" : "text-gray-700"
                      }`}>
                        {message.content}
                      </p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#FF6B35] to-[#F7931E] flex-shrink-0">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <div className="rounded-2xl rounded-tl-none bg-white p-3 shadow-sm border border-gray-100">
                      <div className="flex gap-1">
                        <span className="h-2 w-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: "0ms" }}></span>
                        <span className="h-2 w-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: "150ms" }}></span>
                        <span className="h-2 w-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: "300ms" }}></span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Input */}
          <form
            id="chat-form"
            onSubmit={handleSubmit}
            className="border-t border-gray-200 bg-white p-4"
          >
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Stel een vraag..."
                className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-sm focus:border-[#FF6B35] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/20"
              />
              <Button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="h-10 w-10 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#F7931E] p-0 hover:from-[#F7931E] hover:to-[#FF6B35] disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

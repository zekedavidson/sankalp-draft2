import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MessageCircle, X, Send, User, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// Define the routes where the chat widget should be visible
const ALLOWED_ROUTES = [
  "/get-quote",
  "/customer-details",
  "/life-insurance",
  "/motor-insurance",
  "/health-insurance",
  "/payment"
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([
    { sender: "bot", text: "Hi there! Welcome to Sankalp Insurance. How can I help you with your quote today?" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const location = useLocation();

  // Determine if widget should be shown based on current route
  // The widget is visible if the path starts with any of the allowed routes (useful for paths with query params)
  const isVisible = ALLOWED_ROUTES.some(route => location.pathname.startsWith(route));

  // Auto-close chat when navigating away from allowed routes
  useEffect(() => {
    if (!isVisible) {
      setIsOpen(false);
    }
  }, [isVisible]);


  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { sender: "user", text: inputValue }]);
    setInputValue("");

    // Mock bot response after delay
    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { 
          sender: "bot", 
          text: "Thank you for your message! Our human agents are currently busy, but I'll connect you right away." 
        }
      ]);
    }, 1000);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <Card className="w-80 h-96 mb-4 shadow-2xl border-primary/20 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          <CardHeader className="bg-navy text-primary-foreground p-4 flex flex-row items-center justify-between space-y-0 relative">
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 absolute left-8 top-8 animate-pulse" />
                <MessageCircle className="w-5 h-5 mr-1" />
                <CardTitle className="text-base font-medium">Chat with Us</CardTitle>
             </div>
            <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 text-primary-foreground hover:bg-white/20 hover:text-white rounded-full" 
                onClick={() => setIsOpen(false)}
            >
              <X className="w-4 h-4" />
            </Button>
          </CardHeader>
          
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex gap-2 max-w-[85%] ${msg.sender === "user" ? "ml-auto flex-row-reverse" : ""}`}
              >
                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${msg.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                  {msg.sender === "user" ? <User className="w-3 h-3" /> : <Bot className="w-3 h-3" />}
                </div>
                <div className={`p-2.5 rounded-2xl text-sm ${msg.sender === "user" ? "bg-primary text-primary-foreground rounded-tr-none" : "bg-white border rounded-tl-none shadow-sm"}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </CardContent>

          <CardFooter className="p-3 bg-white border-t">
            <form onSubmit={handleSend} className="flex w-full gap-2">
              <Input 
                placeholder="Type your message..." 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 rounded-full bg-muted/50 border-transparent focus-visible:ring-primary/20"
              />
              <Button type="submit" size="icon" className="rounded-full flex-shrink-0 shadow-md">
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full shadow-2xl bg-primary hover:bg-primary/90 text-primary-foreground transition-transform hover:scale-105"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}
      </Button>
    </div>
  );
}

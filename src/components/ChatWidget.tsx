import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { sendMessageToCozeAgent } from "@/lib/cozeService";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'user' | 'bot' }>>([
    {
      text: "您好！欢迎咨询袋鼠口腔，我是智能客服助手。请问有什么可以帮助您的吗？",
      sender: "bot"
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // 处理发送消息
  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    // 添加用户消息
    const newMessages = [...messages, { text: inputText, sender: "user" }];
    setMessages(newMessages);
    setInputText("");
    setIsLoading(true);

    try {
      // 调用Coze智能体服务获取回复
      const botResponse = await sendMessageToCozeAgent(inputText);
      setMessages(prev => [...prev, { text: botResponse, sender: "bot" }]);
    } catch (error) {
      console.error('Failed to get response from Coze agent:', error);
      setMessages(prev => [...prev, { text: '很抱歉，我暂时无法为您提供回答。请稍后再试或联系客服热线。', sender: "bot" }]);
    } finally {
      setIsLoading(false);
    }
  };

  // 处理键盘事件
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* 聊天窗口 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-0 left-0 mx-auto w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-2xl z-50 flex flex-col h-[70vh] max-h-[500px] border border-gray-200 dark:border-gray-700"
          >
            {/* 聊天窗口头部 */}
            <div className="bg-blue-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <i className="fa-solid fa-comments text-white"></i>
                </div>
                <h3 className="font-bold">智能客服</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="关闭聊天窗口"
              >
                <i className="fa-solid fa-times"></i>
              </button>
            </div>

            {/* 聊天消息区域 */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-none' 
                      : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-none border border-gray-200 dark:border-gray-700'
                  }`}>
                    <p>{message.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 输入区域 */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-b-2xl">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="请输入您的问题..."
                  className="flex-1 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
                  <button
                    onClick={handleSendMessage}
                    disabled={isLoading}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      isLoading 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                    aria-label="发送消息"
                  >
                    {isLoading ? (
                      <i className="fa-solid fa-spinner fa-spin"></i>
                    ) : (
                      <i className="fa-solid fa-paper-plane"></i>
                    )}
                  </button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                工作时间：周一至周日 9:00-18:00
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 聊天按钮 */}
      <motion.button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center hover:bg-blue-700 transition-all z-40"
        onClick={() => {
          setIsOpen(!isOpen);
          if (isOpen === false) {
            toast.info("智能客服已开启，有什么可以帮助您的吗？");
          }
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isOpen ? "关闭智能客服" : "打开智能客服"}
      >
        {isOpen ? (
          <i className="fa-solid fa-times text-xl"></i>
        ) : (
          <i className="fa-solid fa-comments text-xl"></i>
        )}
      </motion.button>
    </>
  );
}
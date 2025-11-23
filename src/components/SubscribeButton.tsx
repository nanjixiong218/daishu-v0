import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

export function SubscribeButton() {
  const [isOpen, setIsOpen] = useState(false);

  // 处理关注公众号
  const handleSubscribe = () => {
    toast.success("感谢您关注我们的公众号！");
    setIsOpen(false);
  };

  return (
    <>
      {/* 公众号二维码弹窗 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 max-w-sm w-full text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                aria-label="关闭"
              >
                <i className="fa-solid fa-times text-xl"></i>
              </button>
              
              <h3 className="text-xl font-bold text-blue-800 dark:text-white mb-4">关注公众号</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                扫描下方二维码关注我们的公众号，获取更多口腔健康知识和优惠信息。
              </p>
              
              <div className="w-48 h-48 bg-white dark:bg-gray-700 mx-auto mb-6 flex items-center justify-center border border-gray-200 dark:border-gray-600">
                <div className="text-center">
                  <img src="https://s21.ax1x.com/2025/11/23/pZkcNi8.jpg" alt="公众号二维码" className="w-48 h-48 mt-2" />
                </div>
              </div>
              
              <button
                onClick={handleSubscribe}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg shadow-md hover:shadow-lg transition-all font-medium"
              >
                已关注
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

       {/* 关注公众号按钮 */}
       <motion.button
        className="fixed top-1/2 -translate-y-1/2 right-0 z-40 bg-green-600 text-white py-3 px-4 rounded-l-full shadow-lg hover:bg-green-700 transition-all flex items-center gap-2"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="关注公众号"
      >
        <i className="fa-brands fa-weixin"></i>
        <span className="hidden sm:inline">关注公众号</span>
      </motion.button>
    </>
  );
}
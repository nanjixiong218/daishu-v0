import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // 监听滚动事件，控制导航栏样式
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 导航链接
  const navLinks = [
    { name: "首页", path: "/" },
    { name: "关于我们", path: "/about" },
    { name: "服务项目", path: "/services" },
    // { name: "成功案例", path: "/cases" },
    // { name: "客户评价", path: "/testimonials" },
    { name: "联系我们", path: "/contact" },
    { name: "在线预约", path: "/appointment", className: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all" }
  ];

  return (
    <header className={`fixed w-full min-w-[1024px] top-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-600 flex items-center justify-center mr-2 sm:mr-3">
                <i className="fa-solid fa-tooth text-white text-lg sm:text-2xl"></i>
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-blue-800 dark:text-white">袋鼠口腔</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block">专业口腔护理</p>
              </div>
            </Link>
          </motion.div>
          
          {/* 桌面导航 */}
          <nav className="hidden md:flex items-center space-x-4 sm:space-x-6">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${
                  link.className || 
                  (isScrolled 
                    ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400' 
                    : 'text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400')
                } font-medium transition-colors text-sm sm:text-base`}
              >
                {link.name}
              </motion.a>
            ))}
            
            {/* 主题切换按钮 */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="切换主题"
            >
              {theme === 'light' ? (
                <i className="fa-solid fa-moon"></i>
              ) : (
                <i className="fa-solid fa-sun"></i>
              )}
            </motion.button>
          </nav>
          
          {/* 移动端菜单按钮 */}
          <motion.button
            className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="打开菜单"
          >
            {isMobileMenuOpen ? (
              <i className="fa-solid fa-times text-xl"></i>
            ) : (
              <i className="fa-solid fa-bars text-xl"></i>
            )}
          </motion.button>
        </div>
      </div>
      
      {/* 移动端菜单 */}
      <motion.div
        className="md:hidden absolute w-full min-w-[320px] bg-white dark:bg-gray-900 shadow-lg z-50"
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
        style={{ overflow: isMobileMenuOpen ? 'visible' : 'hidden' }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className={`${
                  link.className || 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                } font-medium py-2 transition-colors`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            {/* 移动端主题切换按钮 */}
            <button
              onClick={() => {
                toggleTheme();
                setIsMobileMenuOpen(false);
              }}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors w-max"
              aria-label="切换主题"
            >
              {theme === 'light' ? (
                <div className="flex items-center">
                  <i className="fa-solid fa-moon mr-2"></i>
                  <span>切换到暗色模式</span>
                </div>
              ) : (
                <div className="flex items-center">
                  <i className="fa-solid fa-sun mr-2"></i>
                  <span>切换到亮色模式</span>
                </div>
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
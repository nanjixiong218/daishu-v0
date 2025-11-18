import { Link } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";

export function Footer() {
  const { theme } = useTheme();
  
  // 诊所信息
  const clinics = [
    {
      name: "袋鼠口腔（顺城店）",
      address: "抚顺市顺城区新城路格林晟博苑东侧袋鼠口腔",
      phone: "024-12345678",
      hours: "周一至周日 9:00-18:00"
    },
    {
      name: "袋鼠口腔（望花店）",
      address: "抚顺市望花区沈抚大道国际鑫城新袋鼠口腔",
      phone: "024-87654321",
      hours: "周一至周日 9:00-18:00"
    }
  ];
  
  // 快速链接
  const quickLinks = [
    { name: "首页", path: "/" },
    { name: "关于我们", path: "/about" },
    { name: "服务项目", path: "/services" },
    { name: "成功案例", path: "/cases" },
    { name: "客户评价", path: "/testimonials" },
    { name: "联系我们", path: "/contact" },
    { name: "在线预约", path: "/appointment" },
    { name: "隐私政策", path: "#" },
    { name: "网站地图", path: "#" }
  ];
  
  // 服务项目链接
  const serviceLinks = [
    { name: "口腔检查", path: "/services" },
    { name: "牙齿美白", path: "/services" },
    { name: "补牙", path: "/services" },
    { name: "根管治疗", path: "/services" },
    { name: "种植牙", path: "/services" },
    { name: "牙齿矫正", path: "/services" },
    { name: "儿童口腔", path: "/services" },
    { name: "口腔外科", path: "/services" }
  ];
  
  // 社交媒体链接
  const socialLinks = [
    { icon: "fa-weixin", name: "微信" },
    { icon: "fa-weibo", name: "微博" },
    { icon: "fa-qq", name: "QQ" },
    { icon: "fa-douyin", name: "抖音" }
  ];

  return (
    <footer className={`bg-gray-100 dark:bg-gray-800 pt-16 pb-8 min-w-[1024px] ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Logo和简介 */}
          <div className="col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-2">
                <i className="fa-solid fa-tooth text-white text-lg"></i>
              </div>
              <div>
                <h2 className="text-xl font-bold text-blue-800 dark:text-white">袋鼠口腔</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">专业口腔护理</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
              袋鼠口腔是抚顺市领先的口腔医疗机构，致力于为患者提供高质量的口腔健康服务。
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                  aria-label={link.name}
                >
                  <i className={`fa-brands ${link.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          {/* 诊所地址 */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold text-blue-800 dark:text-white mb-6">诊所地址</h3>
            <div className="space-y-6">
              {clinics.map((clinic, index) => (
                <div key={index}>
                  <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">{clinic.name}</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <i className="fa-solid fa-map-marker-alt text-blue-600 dark:text-blue-400 mt-1 mr-2 flex-shrink-0"></i>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">{clinic.address}</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-phone text-blue-600 dark:text-blue-400 mt-1 mr-2 flex-shrink-0"></i>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">{clinic.phone}</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-clock text-blue-600 dark:text-blue-400 mt-1 mr-2 flex-shrink-0"></i>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">{clinic.hours}</span>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* 快速链接 */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold text-blue-800 dark:text-white mb-6">快速链接</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.path} 
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center text-sm"
                  >
                    <i className="fa-solid fa-chevron-right text-xs mr-2 text-blue-600 dark:text-blue-400"></i>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* 服务项目 */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold text-blue-800 dark:text-white mb-6">服务项目</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.path} 
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center text-sm"
                  >
                    <i className="fa-solid fa-chevron-right text-xs mr-2 text-blue-600 dark:text-blue-400"></i>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* 版权信息 */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © 2025 袋鼠口腔. 保留所有权利.
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
            本网站仅供参考，不构成医疗建议。如有口腔健康问题，请咨询专业医生。
          </p>
        </div>
      </div>
    </footer>
  );
}
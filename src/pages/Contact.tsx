import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Contact() {
  // 滚动动画变量
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // 地图引用
  const mapRef = useRef<HTMLDivElement>(null);

  // 诊所地址数据
  const clinics = [
    {
      id: 1,
      name: "袋鼠口腔（顺城店）",
      address: "抚顺市顺城区新城路格林晟博苑东侧袋鼠口腔",
      phone: "024-12345678",
      hours: "周一至周日 9:00-18:00",
      coordinates: {
        lng: 123.914815,
        lat: 41.881832
      }
    },
    {
      id: 2,
      name: "袋鼠口腔（望花店）",
      address: "抚顺市望花区沈抚大道国际鑫城新袋鼠口腔",
      phone: "024-87654321",
      hours: "周一至周日 9:00-18:00",
      coordinates: {
        lng: 123.821714,
        lat: 41.823103
      }
    }
  ];

  // 初始化地图
  useEffect(() => {
    // 检查是否已加载高德地图API
    if (typeof window.AMap === 'undefined') {
      // 如果未加载，尝试重新加载
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://webapi.amap.com/maps?v=2.0&key=your_amap_key';
      script.onload = initMap;
      document.body.appendChild(script);
    } else {
      initMap();
    }

    function initMap() {
      if (mapRef.current && typeof window.AMap !== 'undefined') {
        // 创建地图实例
        const map = new window.AMap.Map(mapRef.current, {
          zoom: 12,
          center: [123.868264, 41.852467], // 抚顺市中心坐标
          viewMode: '3D'
        });

        // 添加控件
        map.addControl(new window.AMap.ToolBar());
        map.addControl(new window.AMap.Scale());
        map.addControl(new window.AMap.MapType());

        // 添加标记
        clinics.forEach(clinic => {
          const marker = new window.AMap.Marker({
            position: [clinic.coordinates.lng, clinic.coordinates.lat],
            title: clinic.name,
            map: map
          });

          // 添加信息窗口
          const infoWindow = new window.AMap.InfoWindow({
            content: `
              <div style="padding: 10px;">
                <h3 style="margin: 0 0 10px 0; color: #333;">${clinic.name}</h3>
                <p style="margin: 5px 0; color: #666;">地址：${clinic.address}</p>
                <p style="margin: 5px 0; color: #666;">电话：${clinic.phone}</p>
                <p style="margin: 5px 0; color: #666;">营业时间：${clinic.hours}</p>
              </div>
            `,
            offset: new window.AMap.Pixel(0, -30)
          });

          marker.on('click', () => {
            infoWindow.open(map, marker.getPosition());
          });
        });
      }
    }

    return () => {
      // 清理地图实例
      if (mapRef.current && typeof window.AMap !== 'undefined') {
        const map = window.AMap.getMap(mapRef.current);
        if (map) {
          map.destroy();
        }
      }
    };
  }, []);

  return (
    <div>
      {/* 页面标题 */}
      <section className="bg-blue-50 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-blue-800 dark:text-white mb-4">联系我们</h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              无论您有任何问题或需求，都可以通过以下方式联系我们，我们将竭诚为您服务。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 联系信息 */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold text-blue-800 dark:text-white mb-8">联系信息</h2>
              
              <div className="space-y-8">
                {clinics.map((clinic) => (
                  <div 
                    key={clinic.id}
                    className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-4">{clinic.name}</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <i className="fa-solid fa-map-marker-alt text-blue-600 dark:text-blue-300"></i>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-1">地址</h4>
                          <p className="text-gray-600 dark:text-gray-400">{clinic.address}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <i className="fa-solid fa-phone text-blue-600 dark:text-blue-300"></i>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-1">电话</h4>
                          <p className="text-gray-600 dark:text-gray-400">{clinic.phone}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <i className="fa-solid fa-clock text-blue-600 dark:text-blue-300"></i>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-1">营业时间</h4>
                          <p className="text-gray-600 dark:text-gray-400">{clinic.hours}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-blue-50 dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-4">其他联系方式</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fa-solid fa-envelope text-blue-600 dark:text-blue-300"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-1">邮箱</h4>
                      <p className="text-gray-600 dark:text-gray-400">contact@daishukouqiang.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="fa-brands fa-weixin text-blue-600 dark:text-blue-300"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-1">微信公众号</h4>
                      <p className="text-gray-600 dark:text-gray-400">袋鼠口腔</p>
                      <div className="mt-2 w-32 h-32 bg-white dark:bg-gray-700 rounded-md flex items-center justify-center">
                        <span className="text-xs text-gray-500 dark:text-gray-400">微信公众号二维码</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold text-blue-800 dark:text-white mb-8">诊所位置</h2>
              
              {/* 地图容器 */}
              <div 
                ref={mapRef}
                className="w-full h-[600px] rounded-xl shadow-lg overflow-hidden"
              >
                {/* 地图加载提示 */}
                <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                  <p className="text-gray-500 dark:text-gray-400">地图加载中...</p>
                </div>
              </div>
              
              {/* 交通指南 */}
              <div className="mt-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-4">交通指南</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                      <i className="fa-solid fa-bus text-blue-600 dark:text-blue-300 mr-2"></i>
                      公交路线
                    </h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 pl-2">
                      <li>顺城店：乘坐1路、12路、19路公交车到格林晟博苑站下车</li>
                      <li>望花店：乘坐30路、54路公交车到国际鑫城站下车</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                      <i className="fa-solid fa-car text-blue-600 dark:text-blue-300 mr-2"></i>
                      自驾路线
                    </h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 pl-2">
                      <li>顺城店：导航至"抚顺市顺城区新城路格林晟博苑"，有停车场</li>
                      <li>望花店：导航至"抚顺市望花区沈抚大道国际鑫城"，有停车场</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 联系表单 */}
      <section className="py-20 bg-blue-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 dark:text-white mb-4">发送消息</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              如有任何问题或建议，请填写以下表单，我们的客服人员将尽快与您联系。
            </p>
          </motion.div>
          
          <motion.div 
            className="max-w-3xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">姓名</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                    placeholder="请输入您的姓名"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">电话</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                    placeholder="请输入您的联系电话"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">邮箱</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                  placeholder="请输入您的邮箱地址"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">主题</label>
                <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all">
                  <option value="">请选择消息主题</option>
                  <option value="appointment">预约咨询</option>
                  <option value="service">服务咨询</option>
                  <option value="complaint">投诉建议</option>
                  <option value="other">其他问题</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">消息内容</label>
                <textarea 
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                  placeholder="请输入您的消息内容"
                  rows={5}
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg shadow-md hover:shadow-lg transition-all text-lg font-medium"
              >
                发送消息
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* 预约区域 */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">准备好预约了吗？</h2>
            <p className="text-blue-100 mb-8 text-lg">
              立即预约，我们的专业团队将为您提供个性化的口腔健康解决方案。
            </p>
            <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all">
              立即预约
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
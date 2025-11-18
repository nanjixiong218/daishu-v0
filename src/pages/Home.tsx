import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/Card";
import { Button } from "@/components/Button";

export default function Home() {
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

  return (
    <div className="relative">
      {/* 英雄区 - 视差效果 */}
      <section className="relative h-[70vh] overflow-hidden bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10 }}
        >
          <div className="absolute inset-0 bg-[url('https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=dental%20clinic%20modern%20interior%20clean%20bright&sign=2b95cb558e716fdfbfc371ffb2da2038')] bg-cover bg-center opacity-20 dark:opacity-10"></div>
        </motion.div>
        
        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-blue-800 dark:text-white mb-4">
              袋鼠口腔 <br />
              <span className="text-2xl md:text-3xl font-normal text-blue-600 dark:text-blue-200">专业呵护您的口腔健康</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8">
              拥有顶尖的医疗团队和先进的设备，为您提供舒适、专业的口腔诊疗服务。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all"
              >
                立即预约
              </Button>
              <Button 
                className="bg-white hover:bg-gray-100 text-blue-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-300 px-8 py-3 rounded-lg text-lg shadow-md hover:shadow-lg transition-all"
              >
                了解更多
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* 装饰元素 */}
        <motion.div 
          className="absolute -bottom-10 right-10 w-64 h-64 rounded-full bg-blue-200 dark:bg-blue-700 opacity-30"
          animate={{ 
            y: [0, -15, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </section>

      {/* 服务特色 */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 dark:text-white mb-4">我们的服务特色</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              袋鼠口腔提供全方位的口腔医疗服务，从常规检查到复杂的口腔手术，我们都能满足您的需求。
            </p>
          </motion.div>
           <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-6 md:px-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300 border-none shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=dental%20examination%20professional%20equipment&sign=c2d8b2f56c2f11c2bbe1a4e7a90ea542" 
                    alt="口腔检查" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-700 dark:text-blue-300">口腔检查</CardTitle>
                  <CardDescription>
                    全面的口腔健康评估，包括龋齿、牙周病和口腔癌筛查
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    我们使用先进的数字X光和口腔扫描仪，为您提供精确的口腔健康评估。
                  </p>
                </CardContent>
                <CardFooter>
                  <Link to="/services" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
                    了解更多 <i className="fa-solid fa-arrow-right text-xs"></i>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <Card className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300 border-none shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=cosmetic%20dental%20treatment%20smile%20makeover&sign=2ea916737ddb32011f65e1a47cdd3062" 
                    alt="美容修复" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-700 dark:text-blue-300">美容修复</CardTitle>
                  <CardDescription>
                    牙齿美白、贴面和正畸等服务，让您拥有自信笑容
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    我们的美容牙科专家将根据您的需求，为您定制个性化的牙齿美容方案。
                  </p>
                </CardContent>
                <CardFooter>
                  <Link to="/services" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
                    了解更多 <i className="fa-solid fa-arrow-right text-xs"></i>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <Card className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300 border-none shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=dental%20surgery%20operating%20room%20modern&sign=f44fa4c8bd8670dc14bdd9c6333e13df" 
                    alt="口腔手术" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-700 dark:text-blue-300">口腔手术</CardTitle>
                  <CardDescription>
                    智齿拔除、种植牙和根管治疗等专业手术服务
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    我们的口腔外科医生拥有丰富的经验，确保手术过程安全、无痛。
                  </p>
                </CardContent>
                <CardFooter>
                  <Link to="/services" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
                    了解更多 <i className="fa-solid fa-arrow-right text-xs"></i>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 团队介绍预览 */}
      <section className="py-20 bg-blue-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 dark:text-white mb-4">我们的专业团队</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              袋鼠口腔拥有一支经验丰富、技术精湛的医疗团队，为您提供最优质的口腔医疗服务。
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* 院长1 */}
            <motion.div variants={fadeInUp} className="group">
              <div className="relative overflow-hidden rounded-xl shadow-lg mb-4 aspect-square">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=female%20dentist%20professional%20smile&sign=3969e475a0de3808ea936731c33cf5e0" 
                  alt="李春丽院长" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h4 className="text-white font-medium">口腔专家</h4>
                    <p className="text-gray-200 text-sm">20年临床经验</p>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-blue-800 dark:text-white text-center">李春丽 <span className="text-sm font-normal text-gray-500 dark:text-gray-400">院长</span></h3>
            </motion.div>
            
            {/* 院长2 */}
            <motion.div variants={fadeInUp} className="group">
              <div className="relative overflow-hidden rounded-xl shadow-lg mb-4 aspect-square">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=male%20dentist%20professional%20smile&sign=dd33e142a4b3905c0646751676d6d0b0" 
                  alt="李巍院长" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h4 className="text-white font-medium">口腔专家</h4>
                    <p className="text-gray-200 text-sm">18年临床经验</p>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-blue-800 dark:text-white text-center">李巍 <span className="text-sm font-normal text-gray-500 dark:text-gray-400">院长</span></h3>
            </motion.div>
            
            {/* 护士1 */}
            <motion.div variants={fadeInUp} className="group">
              <div className="relative overflow-hidden rounded-xl shadow-lg mb-4 aspect-square">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=male%20dental%20nurse%20professional&sign=47deb934392f9b85ab3ea6def7a37839" 
                  alt="航弟护士" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h4 className="text-white font-medium">资深护士</h4>
                    <p className="text-gray-200 text-sm">10年护理经验</p>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-blue-800 dark:text-white text-center">航弟 <span className="text-sm font-normal text-gray-500 dark:text-gray-400">护士</span></h3>
            </motion.div>
            
            {/* 护士2 */}
            <motion.div variants={fadeInUp} className="group">
              <div className="relative overflow-hidden rounded-xl shadow-lg mb-4 aspect-square">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=female%20dental%20nurse%20professional%20smile&sign=0d96bacd5209ec0c70b1c927e85c906f" 
                  alt="文琼护士" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h4 className="text-white font-medium">资深护士</h4>
                    <p className="text-gray-200 text-sm">8年护理经验</p>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-blue-800 dark:text-white text-center">文琼 <span className="text-sm font-normal text-gray-500 dark:text-gray-400">护士</span></h3>
            </motion.div>
          </motion.div>
          
          <div className="text-center mt-10">
            <Link to="/about">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all">
                查看全部团队成员
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 客户评价预览 */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 dark:text-white mb-4">客户评价</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              听听我们的客户怎么说，他们的真实体验是我们服务质量的最好证明。
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item}
                variants={fadeInUp}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star text-yellow-400"></i>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic mb-6">
                  "在袋鼠口腔就诊的体验非常好，医生和护士都非常专业和友好，整个过程没有任何不适。我终于可以自信地微笑了！"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={`https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=happy%20patient%20smiling%20${item % 2 === 0 ? 'female' : 'male'}`} 
                      alt="客户头像" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-800 dark:text-white">客户姓名 {item}</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">牙齿{['美白', '种植', '矫正'][item - 1]}项目</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-10">
            <Link to="/testimonials">
              <Button className="bg-white hover:bg-gray-100 text-blue-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700 px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all">
                查看更多评价
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 预约区域 */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">立即预约，重获自信笑容</h2>
              <p className="text-blue-100 mb-8 text-lg">
                填写简单的表单，我们的客服人员将尽快与您联系，为您安排合适的就诊时间。
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  { icon: 'fa-check-circle', text: '无需等待，优先就诊' },
                  { icon: 'fa-shield-alt', text: '严格的消毒流程，安全无忧' },
                  { icon: 'fa-smile', text: '舒适的就诊环境，缓解紧张情绪' },
                  { icon: 'fa-credit-card', text: '透明的价格体系，无隐形消费' }
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <i className={`fa-solid ${item.icon} text-blue-300 mr-3 text-xl`}></i>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-blue-800 dark:text-white mb-6 text-center">快速预约</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">姓名</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">电话</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      placeholder="请输入您的联系电话"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">预约项目</label>
                  <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white">
                    <option value="">请选择预约项目</option>
                    <option value="checkup">口腔检查</option>
                    <option value="whitening">牙齿美白</option>
                    <option value="filling">补牙</option>
                    <option value="implant">种植牙</option>
                    <option value="orthodontics">牙齿矫正</option>
                    <option value="other">其他项目</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">预约时间</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">备注信息</label>
                  <textarea 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="请输入您的特殊需求或问题"
                    rows={3}
                  ></textarea>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg shadow-md hover:shadow-lg transition-all text-lg">
                  提交预约
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
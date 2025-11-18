import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Cases() {
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
        staggerChildren: 0.1
      }
    }
  };

  // 案例数据
  const cases = [
    {
      id: 1,
      title: "牙齿美白案例",
      category: "牙齿美容",
      beforeImage: "before%20teeth%20whitening%20stained%20teeth",
      afterImage: "after%20teeth%20whitening%20bright%20smile",
      description: "这位患者因长期喝咖啡和茶导致牙齿变色，经过我们的冷光美白治疗后，牙齿明显变白，笑容更加自信。"
    },
    {
      id: 2,
      title: "种植牙案例",
      category: "牙齿修复",
      beforeImage: "before%20dental%20implant%20missing%20tooth",
      afterImage: "after%20dental%20implant%20restored%20smile",
      description: "这位患者因意外导致前牙缺失，我们为其进行了种植牙修复，恢复了牙齿的功能和美观，患者非常满意。"
    },
    {
      id: 3,
      title: "牙齿矫正案例",
      category: "牙齿矫正",
      beforeImage: "before%20orthodontic%20treatment%20crowded%20teeth",
      afterImage: "after%20orthodontic%20treatment%20straight%20smile",
      description: "这位患者存在牙齿拥挤和前突的问题，经过2年的隐形矫正治疗后，牙齿排列整齐，面部轮廓也得到了改善。"
    },
    {
      id: 4,
      title: "全冠修复案例",
      category: "牙齿修复",
      beforeImage: "before%20dental%20crown%20damaged%20tooth",
      afterImage: "after%20dental%20crown%20restored%20tooth",
      description: "这位患者的磨牙因龋齿严重受损，我们为其进行了根管治疗后，制作了全瓷冠修复，恢复了牙齿的形态和功能。"
    },
    {
      id: 5,
      title: "贴面修复案例",
      category: "牙齿美容",
      beforeImage: "before%20dental%20veneers%20discolored%20teeth",
      afterImage: "after%20dental%20veneers%20perfect%20smile",
      description: "这位患者的前牙存在间隙和变色问题，我们为其制作了瓷贴面，不仅关闭了间隙，还改善了牙齿的颜色和形态。"
    },
    {
      id: 6,
      title: "儿童早期矫正案例",
      category: "儿童口腔",
      beforeImage: "before%20child%20orthodontics%20malocclusion",
      afterImage: "after%20child%20orthodontics%20corrected%20smile",description: "这位儿童存在地包天的问题，我们为其进行了早期干预矫正，通过功能矫治器引导颌骨正常发育，取得了良好的效果。"
    }
  ];

  // 分类选项
  const categories = ["全部", "牙齿美容", "牙齿修复", "牙齿矫正", "儿童口腔"];
  
  // 状态管理
  const [selectedCategory, setSelectedCategory] = useState("全部");
  const [selectedCase, setSelectedCase] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'before' | 'after' | 'comparison'>('comparison');

  // 过滤案例
  const filteredCases = selectedCategory === "全部" 
    ? cases 
    : cases.filter(caseItem => caseItem.category === selectedCategory);

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
            <h1 className="text-3xl md:text-5xl font-bold text-blue-800 dark:text-white mb-4">成功案例</h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              查看我们的真实案例，了解袋鼠口腔如何帮助患者解决各种口腔问题。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 案例过滤 */}
      <section className="py-10 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 案例展示 */}
      <section className="py-10 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {filteredCases.map((caseItem) => (
              <motion.div 
                key={caseItem.id}
                variants={fadeInUp}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedCase(caseItem.id)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={`https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=${caseItem.afterImage}`} 
                    alt={caseItem.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full self-start mb-2">
                      {caseItem.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">{caseItem.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-2 mb-4">
                    {caseItem.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 dark:text-blue-400 text-sm">
                      点击查看详情
                    </span>
                    <i className="fa-solid fa-arrow-right text-blue-600 dark:text-blue-400 text-sm group-hover:translate-x-1 transition-transform duration-300"></i>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 案例详情模态框 */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const caseItem = cases.find(item => item.id === selectedCase);
                if (!caseItem) return null;
                
                return (
                  <>
                    <div className="relative">
                      <button 
                        className="absolute top-4 right-4 bg-white/80 dark:bg-gray-800/80 w-10 h-10 rounded-full flex items-center justify-center text-gray-800 dark:text-white z-10"
                        onClick={() => setSelectedCase(null)}
                      >
                        <i className="fa-solid fa-times"></i>
                      </button>
                      
                      {/* 图片展示区域 */}
                      <div className="relative h-80 md:h-96 bg-gray-100 dark:bg-gray-800">
                        {/* 查看模式切换按钮 */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 dark:bg-gray-800/90 rounded-full p-1 flex gap-1">
                          <button 
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${viewMode === 'before' ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-gray-300'}`}
                            onClick={(e) => { e.stopPropagation(); setViewMode('before'); }}
                          >
                            治疗前
                          </button>
                          <button 
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${viewMode === 'after' ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-gray-300'}`}
                            onClick={(e) => { e.stopPropagation(); setViewMode('after'); }}
                          >
                            治疗后
                          </button>
                          <button 
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${viewMode === 'comparison' ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-gray-300'}`}
                            onClick={(e) => { e.stopPropagation(); setViewMode('comparison'); }}
                          >
                            对比
                          </button>
                        </div>
                        
                        {/* 图片显示 */}
                        <AnimatePresence mode="wait">
                          {viewMode === 'before' && (
                            <motion.img 
                              key="before"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              src={`https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=${caseItem.beforeImage}`} 
                              alt={`${caseItem.title} - 治疗前`}
                              className="w-full h-full object-contain p-4"
                            />
                          )}
                          
                          {viewMode === 'after' && (
                            <motion.img 
                              key="after"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              src={`https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=${caseItem.afterImage}`} 
                              alt={`${caseItem.title} - 治疗后`}
                              className="w-full h-full object-contain p-4"
                            />
                          )}
                          
                          {viewMode === 'comparison' && (
                            <motion.div 
                              key="comparison"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="w-full h-full flex items-center justify-center"
                            >
                              <div className="flex gap-4 max-w-full max-h-full p-4">
                                <div className="flex-1 relative">
                                  <img 
                                    src={`https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=${caseItem.beforeImage}`} 
                                    alt={`${caseItem.title} - 治疗前`}
                                    className="w-full h-full object-contain"
                                  />
                                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-center text-sm">
                                    治疗前
                                  </div>
                                </div>
                                <div className="flex-1 relative">
                                  <img 
                                    src={`https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=${caseItem.afterImage}`} 
                                    alt={`${caseItem.title} - 治疗后`}
                                    className="w-full h-full object-contain"
                                  />
                                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-center text-sm">
                                    治疗后
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                    
                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold px-3 py-1 rounded-full">
                          {caseItem.category}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-blue-800 dark:text-white mb-4">{caseItem.title}</h2>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">{caseItem.description}</p>
                      
                      <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl mb-6">
                        <h3 className="text-lg font-semibold text-blue-800 dark:text-white mb-3">治疗方案</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-2"></i>
                            <span className="text-gray-600 dark:text-gray-300">全面的口腔检查和评估</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-2"></i>
                            <span className="text-gray-600 dark:text-gray-300">个性化的治疗方案制定</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-2"></i>
                            <span className="text-gray-600 dark:text-gray-300">专业的治疗实施</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-2"></i>
                            <span className="text-gray-600 dark:text-gray-300">定期的随访和口腔护理指导</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <button 
                          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all"
                          onClick={() => {
                            setSelectedCase(null);
                            // 这里可以添加预约逻辑
                          }}
                        >
                          预约类似治疗
                        </button>
                        <button 
                          className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                          onClick={() => setSelectedCase(null)}
                        >
                          关闭
                        </button>
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">想要拥有类似的效果吗？</h2>
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
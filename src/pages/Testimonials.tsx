import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Testimonials() {
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

  // 客户评价数据
  const testimonials = [
    {
      id: 1,
      name: "张先生",
      gender: "male",
      avatar: "happy%20male%20patient%20smiling",
      service: "牙齿种植",
      rating: 5,
      comment: "非常感谢袋鼠口腔的医护团队，他们的专业和耐心让我非常感动。种植牙的过程比我想象的要轻松很多，现在我又能正常进食了，非常满意！",
      date: "2025-10-15"
    },
    {
      id: 2,
      name: "李女士",
      gender: "female",
      avatar: "happy%20female%20patient%20smiling",
      service: "牙齿矫正",
      rating: 5,
      comment: "在袋鼠口腔做了隐形矫正，效果非常好！医生和护士都很专业，会耐心解答我的问题。现在我的牙齿排列整齐了，自信心也提高了很多。",
      date: "2025-09-28"
    },
    {
      id: 3,
      name: "王女士",
      gender: "female",
      avatar: "middle%20aged%20female%20patient%20smiling",
      service: "牙齿美白",
      rating: 4,
      comment: "冷光美白的效果很不错，牙齿明显变白了。医生的技术很好，过程中没有不适感。诊所的环境也很干净舒适，值得推荐！",
      date: "2025-08-12"
    },
    {
      id: 4,
      name: "刘先生",
      gender: "male",
      avatar: "middle%20aged%20male%20patient%20smiling",
      service: "根管治疗",
      rating: 5,
      comment: "一直很害怕看牙医，但在袋鼠口腔的体验让我改变了看法。根管治疗过程中几乎没有疼痛，医生的技术非常好，护士也很温柔。",
      date: "2025-07-20"
    },
    {
      id: 5,
      name: "陈女士",
      gender: "female",
      avatar: "young%20female%20patient%20smiling",
      service: "儿童口腔",
      rating: 5,
      comment: "带孩子来做窝沟封闭，医生和护士都很有耐心，孩子一点都不害怕。诊所还有专门的儿童区，环境很温馨，以后会一直在这里看牙。",
      date: "2025-06-30"
    },
    {
      id: 6,
      name: "赵先生",
      gender: "male",
      avatar: "senior%20male%20patient%20smiling",
      service: "全冠修复",
      rating: 4,
      comment: "全冠修复的效果很自然，和真牙几乎一样。医生的技术很好，服务也很周到。唯一的小缺点是等待时间有点长，但总体来说很满意。",
      date: "2025-05-18"
    }
  ];

  // 状态管理
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // 自动轮播效果
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  // 手动切换评价
  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
    // 30秒后恢复自动播放
    setTimeout(() => setIsAutoPlaying(true), 30000);
  };

  // 生成评分星星
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <i 
        key={i} 
        className={`fa-solid ${i < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
      ></i>
    ));
  };

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
            <h1 className="text-3xl md:text-5xl font-bold text-blue-800 dark:text-white mb-4">客户评价</h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              听听我们的客户怎么说，他们的真实体验是我们服务质量的最好证明。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 精选评价轮播 */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 dark:text-white mb-4">精选评价</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              这些是我们的客户对袋鼠口腔服务的真实评价，我们非常重视每一位客户的反馈。
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto relative">
            {/* 轮播评价 */}
            <motion.div 
              className="bg-gray-50 dark:bg-gray-800 p-8 md:p-12 rounded-2xl shadow-xl relative overflow-hidden"
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {/* 装饰元素 */}
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-100 dark:bg-blue-900 rounded-full opacity-50"></div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-100 dark:bg-blue-900 rounded-full opacity-50"></div>
              
              {/* 评价内容 */}
              <div className="relative z-10">
                <div className="flex justify-center mb-8">
                  <i className="fa-solid fa-quote text-6xl text-blue-200 dark:text-blue-800 opacity-50"></i>
                </div>
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="text-gray-600 dark:text-gray-300 text-xl md:text-2xl italic mb-10 max-w-3xl mx-auto">
                      "{testimonials[currentTestimonial].comment}"
                    </p>
                    
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
                        <img 
                          src={`https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=${testimonials[currentTestimonial].avatar}`} 
                          alt={testimonials[currentTestimonial].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-blue-800 dark:text-white mb-1">
                          {testimonials[currentTestimonial].name}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 mb-2">
                          {testimonials[currentTestimonial].service}
                        </p>
                        <div className="flex justify-center md:justify-start">
                          {renderStars(testimonials[currentTestimonial].rating)}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
            
            {/* 轮播导航 */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial 
                      ? 'bg-blue-600 w-10' 
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`查看评价 ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 所有评价列表 */}
      <section className="py-20 bg-blue-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 dark:text-white mb-4">所有评价</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              查看更多客户对袋鼠口腔服务的评价，了解我们的服务质量。
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id}
                variants={fadeInUp}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img 
                        src={`https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=${testimonial.avatar}`} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-800 dark:text-white">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.service}</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.date}
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300">
                  "{testimonial.comment}"
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 患者满意度统计 */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 dark:text-white mb-4">患者满意度</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              我们一直致力于提高服务质量，患者的满意度是我们最大的追求。
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { value: "98%", label: "患者满意度" },
              { value: "5000+", label: "成功案例" },
              { value: "15+", label: "专业医师" },
              { value: "15年", label: "品牌历史" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="bg-blue-50 dark:bg-gray-800 p-8 rounded-2xl shadow-md text-center"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-3">{stat.value}</h3>
                <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">准备好体验我们的服务了吗？</h2>
            <p className="text-blue-100 mb-8 text-lg">
              立即预约，加入我们众多满意的客户行列，重获自信笑容。
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
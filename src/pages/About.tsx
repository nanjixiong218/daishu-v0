import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/Card";

export default function About() {
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

  // 团队成员数据
  const teamMembers = [
    {
      id: 1,
      name: "李春丽",
      position: "院长",
      gender: "female",
      description: "口腔医学专业，毕业于四川大学，口内常见疾病诊断及规范化治疗、各类牙齿拔除、牙体缺损美学修复、牙齿美白、牙周炎治疗、各类牙冠修复技术；尤为擅长牙体缺损 / 变色牙美学修复、牙体牙髓病根管治疗、青少年及成人牙齿矫正。",
      experience: "20年"
    },
    {
      id: 2,
      name: "李巍",
      position: "院长",
      gender: "male",
      description: "口腔医学专业，毕业于山东第一医科大学，前牙美学区种植、微创种植、即刻种植、牙槽骨量缺损种植、数字化种植、即拔即种、上颌窦内 / 外提升、复杂植骨、半 / 全口种植修复重建等疑难种植修复项目；精通美式、德式、韩式等精尖口腔种植技术。",
      experience: "20年"
    },
    {
      id: 3,
      name: "航弟",
      position: "护士",
      gender: "male",
      description: "口腔护理专业毕业，拥有丰富的临床护理经验，擅长为患者提供舒适的诊疗体验。",
      experience: "10年"
    },
    {
      id: 4,
      name: "文琼",
      position: "护士",
      gender: "female",
      description: "资深口腔护士，专注于儿童口腔护理，善于与儿童沟通，缓解他们的紧张情绪。",
      experience: "8年"
    },
    {
      id: 5,
      name: "大君君",
      position: "护士",
      gender: "female",
      description: "口腔护理专家，精通各种口腔护理技术，为患者提供专业的术后护理指导。",
      experience: "12年"
    }
  ];

  // 荣誉数据
  const honors = [
    {
      id: 1,
      title: "全国口腔医疗质量优秀单位",
      year: "2023",
      description: "表彰我诊所在口腔医疗质量、服务态度和患者满意度方面的卓越表现。"
    },
    {
      id: 2,
      title: "辽宁省口腔医学会常务理事单位",
      year: "2022",
      description: "我诊所成为辽宁省口腔医学会的重要成员，积极参与行业标准制定和学术交流。"
    },
    {
      id: 3,
      title: "抚顺市消费者满意单位",
      year: "2021",
      description: "通过严格的评审，我诊所被授予抚顺市消费者满意单位称号，体现了患者对我们的信任。"
    },
    {
      id: 4,
      title: "数字化口腔诊疗示范基地",
      year: "2020",
      description: "表彰我诊所在数字化口腔诊疗技术方面的创新和应用，推动行业发展。"
    }
  ];

  return (
    <div>
      {/* 页面标题 */}
      <section className="bg-blue-50 dark:bg-gray-800 py-16">
        <div className="container px-4 mt-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-blue-800 dark:text-white mb-4">关于我们</h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              袋鼠口腔是抚顺市领先的口腔医疗机构，致力于为患者提供高质量的口腔健康服务。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 诊所简介 */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold text-blue-800 dark:text-white mb-6">袋鼠口腔的故事</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                袋鼠口腔成立于2022年，是一家专注于口腔健康的现代化诊所，致力于提供全方位、个性化的口腔医疗服务。自成立以来，始终秉承 “患者至上，质量为本” 的核心服务理念，为每一位患者提供细致入微的关怀与专业规范的诊疗服务。
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                多年来，我们不断引进国际先进的口腔医疗设备和技术，培养了一支由经验丰富的口腔专家组成的医疗团队，为抚顺市及周边地区的患者提供全方位的口腔健康服务。
              </p>
              
              <p className="text-gray-600 dark:text-gray-300">
                目前，我们拥有两家分院，分别位于抚顺市顺城区和望花区，总占地面积超过2000平方米，设有口腔内科、口腔外科、口腔修复科、口腔正畸科、儿童口腔科等多个专业科室。
              </p>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-full h-full bg-blue-100 dark:bg-blue-800 rounded-2xl -z-10"></div>
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=dental%20clinic%20reception%20area%20modern%20clean&sign=7d1b4c00d0ddc5c9dac7a2fb356c2713" 
                alt="袋鼠口腔诊所环境" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 我们的使命与价值观 */}
      <section className="py-20 bg-blue-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 dark:text-white mb-4">我们的使命与价值观</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              袋鼠口腔始终坚持"仁心为本，精艺为道，臻于至善"的核心价值观，致力于为患者提供最优质的口腔健康服务。
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                icon: "fa-heart",
                title: "我们的使命",
                description: "以卓越的牙科艺术，守护您的灿烂笑容与健康自信"
              },
              {
                icon: "fa-check-circle",
                title: "我们的愿景",
                description: "成为每一位患者及其家庭终身信赖的口腔健康管家"
              },
              {
                icon: "fa-star",
                title: "我们的价值观",
                description: "仁心为本，精艺为道，臻于至善"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 px-[20px]"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className={`fa-solid ${item.icon} text-blue-600 dark:text-blue-300 text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-blue-800 dark:text-white mb-4 text-center">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 团队介绍 */}
      <section className="py-20 bg-white dark:bg-gray-900">
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {teamMembers.map((member) => (
              <motion.div 
                key={member.id}
                variants={fadeInUp}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={`https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=${member.gender}%20dental%20${member.position === '院长' ? 'doctor' : 'nurse'}%20professional%20smile`} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h4 className="text-white font-medium text-xl">{member.position === '院长' ? '口腔专家' : '资深护士'}</h4>
                      <p className="text-gray-200">{member.experience}临床经验</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 dark:text-white mb-2">{member.name} <span className="text-sm font-normal text-gray-500 dark:text-gray-400">{member.position}</span></h3>
                  <p className="text-gray-600 dark:text-gray-300">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 荣誉展示 */}
      {/* <section className="py-20 bg-blue-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 dark:text-white mb-4">我们的荣誉</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              袋鼠口腔多年来获得的荣誉和认可，是我们不断追求卓越的动力。
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {honors.map((honor) => (
              <motion.div 
                key={honor.id}
                variants={fadeInUp}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-blue-800 dark:text-white">{honor.title}</h3>
                  <span className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">{honor.year}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{honor.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* 诊所环境 */}
      {/* <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 dark:text-white mb-4">诊所环境</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              我们致力于为患者提供舒适、温馨的就诊环境，让每一位患者都能在轻松愉快的氛围中接受治疗。
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              "dental clinic waiting room modern comfortable",
              "dental clinic treatment room equipment",
              "dental clinic sterilization room",
              "dental clinic children area playful",
              "dental clinic reception desk",
              "dental clinic corridor clean"
            ].map((prompt, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="overflow-hidden rounded-xl shadow-lg group"
              >
                <img 
                  src={`https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=${prompt}`} 
                  alt={`诊所环境 ${index + 1}`} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}
    </div>
  );
}
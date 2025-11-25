import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/Card";
import { Button } from "@/components/Button";
import { Link } from "react-router-dom";

export default function Services() {
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

  // 服务项目数据
  const services = [
    {
      id: 1,
      title: "口腔检查",
      icon: "fa-stethoscope",
      description: "全面的口腔健康评估，包括龋齿、牙周病和口腔癌筛查，使用先进的数字X光和口腔扫描仪。",
      details: [
        "全面的口腔检查和评估",
        "数字X光检查",
        "口腔癌筛查",
        "个性化口腔保健计划"
      ],
      price: "¥198起",
      image: "dental%20checkup%20professional%20equipment"
    },
    {
      id: 2,
      title: "牙齿美白",
      icon: "fa-sun",
      description: "专业的牙齿美白服务，包括冷光美白和家庭美白套装，让您拥有自信洁白的笑容。",
      details: [
        "冷光美白",
        "家庭美白套装",
        "个性化美白方案",
        "美白后护理指导"
      ],
      price: "¥880起",
      image: "teeth%20whitening%20procedure%20professional"
    },
    {
      id: 3,
      title: "补牙",
      icon: "fa-wrench",
      description: "使用先进的复合树脂材料修复龋齿，恢复牙齿的形状和功能，颜色自然美观。",
      details: [
        "复合树脂补牙",
        "牙齿美容修复",
        "微创补牙技术",
        "高强度耐用材料"
      ],
      price: "¥280起",
      image: "dental%20filling%20procedure"
    },
    {
      id: 4,
      title: "根管治疗",
      icon: "fa-syringe",
      description: "专业的根管治疗，去除感染的牙髓组织，保留患牙，缓解疼痛，恢复牙齿功能。",
      details: [
        "无痛根管治疗",
        "显微镜辅助根管治疗",
        "根管消毒和填充",
        "牙冠修复建议"
      ],
      price: "¥1280起",
      image: "root%20canal%20treatment%20procedure"
    },
    {
      id: 5,
      title: "种植牙",
      icon: "fa-tooth",
      description: "先进的种植牙技术，为缺失牙齿的患者提供永久的解决方案，恢复咀嚼功能和美观。",
      details: [
        "数字化种植牙设计",
        "微创种植技术",
        "高品质种植体",
        "个性化修复方案"
      ],
      price: "¥6800起",
      image: "dental%20implant%20procedure"
    },
    {
      id: 6,
      title: "牙齿矫正",
      icon: "fa-align-left",
      description: "多种牙齿矫正方案，包括传统金属托槽、陶瓷托槽和隐形矫正，满足不同患者的需求。",
      details: [
        "传统金属托槽矫正",
        "陶瓷托槽矫正",
        "隐形矫正",
        "舌侧矫正"
      ],
      price: "¥8800起",
      image: "orthodontic%20treatment%20smile"
    },
    {
      id: 7,
      title: "儿童口腔",
      icon: "fa-child",
      description: "专业的儿童口腔服务，包括龋齿预防、窝沟封闭、涂氟和早期错颌畸形干预。",
      details: [
        "儿童龋齿预防",
        "窝沟封闭",
        "牙齿涂氟",
        "早期错颌畸形干预",
        "儿童口腔健康教育"
      ],
      price: "¥120起",
      image: "child%20dental%20checkup%20happy"
    },
    {
      id: 8,
      title: "口腔外科",
      icon: "fa-scissors",
      description: "专业的口腔外科服务，包括智齿拔除、复杂牙拔除、颌面创伤处理等。",
      details: [
        "无痛拔牙",
        "阻生智齿拔除",
        "复杂牙拔除",
        "颌面创伤处理"
      ],
      price: "¥380起",
      image: "oral%20surgery%20procedure"
    }
  ];

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
            <h1 className="text-3xl md:text-5xl font-bold text-blue-800 dark:text-white mb-4">我们的服务</h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              袋鼠口腔提供全方位的口腔医疗服务，从常规检查到复杂的口腔手术，我们都能满足您的需求。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 服务项目介绍 */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 dark:text-white mb-4">服务项目</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              我们的口腔专家团队拥有丰富的经验，为您提供专业、安全、舒适的口腔医疗服务。
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {services.map((service) => (
              <motion.div 
                key={service.id}
                variants={fadeInUp}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={`https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=${service.image}`} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-bold">
                    {service.price}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mr-3">
                      <i className={`fa-solid ${service.icon} text-blue-600 dark:text-blue-300`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-blue-800 dark:text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                  <ul className="mb-6 space-y-2">
                    {service.details.slice(0, 3).map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <i className="fa-solid fa-check text-green-500 mt-1 mr-2"></i>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">{detail}</span>
                      </li>
                    ))}
                    {service.details.length > 3 && (
                      <li className="text-gray-500 dark:text-gray-400 text-sm italic">
                        更多服务内容请咨询...
                      </li>
                    )}
                  </ul>
                  {/* <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg shadow-md hover:shadow-lg transition-all">
                    立即预约
                  </Button> */}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 服务流程 */}
      <section className="py-20 bg-blue-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 dark:text-white mb-4">服务流程</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              我们致力于为您提供便捷、高效的口腔医疗服务，让您的就诊体验更加舒适和愉悦。
            </p>
          </motion.div>
          
          <motion.div 
            className="relative max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* 连接线 */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 dark:bg-blue-700 -translate-x-1/2 hidden md:block"></div>
            
            {[
              {
                step: 1,
                title: "在线预约",
                description: "通过我们的官网或电话进行预约，选择您方便的时间和服务项目。"
              },
              {
                step: 2,
                title: "初诊咨询",
                description: "到达诊所后，我们的前台工作人员会为您登记信息，并安排医生进行初诊咨询。"
              },
              {
                step: 3,
                title: "口腔检查",
                description: "医生会为您进行全面的口腔检查，了解您的口腔健康状况，并根据检查结果制定个性化的治疗方案。"
              },
              {
                step: 4,
                title: "治疗实施",
                description: "根据制定的治疗方案，我们的医生会为您实施相应的治疗，确保治疗过程安全、舒适。"
              },
              {
                step: 5,
                title: "术后随访",
                description: "治疗结束后，我们会定期进行随访，了解您的恢复情况，并提供必要的口腔护理指导。"
              }
            ].map((item, index) => (
              <motion.div 
                key={item.step}
                variants={fadeInUp}
                className={`flex flex-col md:flex-row items-center md:items-start mb-12 relative ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* 步骤圆圈 */}
                <div className="absolute left-1/2 top-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold -translate-x-1/2 z-10 hidden md:flex">
                  {item.step}
                </div>
                
                {/* 移动端步骤指示 */}
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-4 md:hidden">
                  {item.step}
                </div>
                
                {/* 内容卡片 */}
                <div className={`bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                }`}>
                  <h3 className="text-xl font-bold text-blue-800 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 常见问题 */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 dark:text-white mb-4">常见问题</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              以下是患者经常咨询的问题，如果您有其他疑问，请随时联系我们。
            </p>
          </motion.div>
          
          <motion.div 
            className="max-w-3xl mx-auto space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                question: "洗牙会损伤牙齿吗？",
                answer: "正规的洗牙不会损伤牙齿。洗牙是通过超声波震荡去除牙齿表面的牙结石和菌斑，不会对牙齿造成损伤。定期洗牙有助于维护口腔健康，预防牙周疾病。"
              },
              {
                question: "种植牙的使用寿命是多久？",
                answer: "种植牙的使用寿命因人而异，一般来说，如果维护得当，可以使用10年以上，甚至终身。种植牙的使用寿命与患者的口腔卫生状况、饮食习惯、全身健康状况等因素有关。"
              },
              {
                question: "牙齿矫正需要多长时间？",
                answer: "牙齿矫正的时间因个人情况而异，一般需要1-3年。矫正时间的长短取决于牙齿畸形的程度、患者的年龄、矫正方法等因素。儿童和青少年的矫正时间通常比成年人短。"
              },
              {
                question: "根管治疗会很痛吗？",
                answer: "现代根管治疗技术已经非常成熟，治疗过程中会使用局部麻醉，患者基本不会感到疼痛。治疗后的轻微不适是正常的，通常会在几天内消失。"
              },
              {
                question: "如何预防龋齿？",
                answer: "预防龋齿的关键是保持良好的口腔卫生习惯，包括每天刷牙两次、使用牙线、定期洗牙等。此外，减少 sugary食物和饮料的摄入，使用含氟牙膏和漱口水也有助于预防龋齿。"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-lg font-bold text-blue-800 dark:text-white mb-2">{item.question}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.answer}</p>
                </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">准备好开始您的口腔健康之旅了吗？</h2>
            <p className="text-blue-100 mb-8 text-lg">
              立即预约，我们的专业团队将为您提供个性化的口腔健康解决方案。
            </p>
            <Link to="/appointment" className="block">
            <Button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all">
              立即预约
            </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { CozeAPI } from "@coze/api";
export default function Appointment() {
  // 滚动动画变量
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // 表单状态
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    // email: "",
    clinic: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  // 处理表单输入变化
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 处理表单提交
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 表单验证
    if (
      !formData.name ||
      !formData.phone
      // !formData.clinic ||
      // !formData.service ||
      // !formData.date ||
      // !formData.time
    ) {
      toast.error("请填写所有必填项");
      return;
    }

    // 保存预约信息到本地存储
    // localStorage.setItem("appointment", JSON.stringify(formData));
    const apiClient = new CozeAPI({
      token:
        "pat_eQlC0sfJdR5RJJFQFfzVJryc36kqF0V40tTkLx25ysn21RKcGooIBu2ba5Elk10S",
        allowPersonalAccessTokenInBrowser: true,
      baseURL: "https://api.coze.cn",
    });
    const res = await apiClient.workflows.runs.create({
      workflow_id: "7575884897472053284",
      parameters: {name: "xu"},
    });
    if (res.code === 0) {
      toast.success("预约成功！我们的客服人员将尽快与您联系确认。");
    } else {
      toast.error("预约失败！请稍后重试。");
    }
    // 显示成功提示
    toast.success("预约成功！我们的客服人员将尽快与您联系确认。");

    // 重置表单
    setFormData({
      name: "",
      phone: "",
      clinic: "",
      service: "",
      date: "",
      time: "",
      message: "",
    });
  };

  // 诊所选项
  const clinics = [
    {
      id: 1,
      name: "袋鼠口腔（顺城店）",
      address: "抚顺市顺城区新城路格林晟博苑东侧袋鼠口腔",
    },
    {
      id: 2,
      name: "袋鼠口腔（望花店）",
      address: "抚顺市望花区沈抚大道国际鑫城新袋鼠口腔",
    },
  ];

  // 服务选项
  const services = [
    { id: 1, name: "口腔检查", price: "¥198起" },
    { id: 2, name: "牙齿美白", price: "¥880起" },
    { id: 3, name: "补牙", price: "¥280起" },
    { id: 4, name: "根管治疗", price: "¥1280起" },
    { id: 5, name: "种植牙", price: "¥6800起" },
    { id: 6, name: "牙齿矫正", price: "¥8800起" },
    { id: 7, name: "儿童口腔", price: "¥120起" },
    { id: 8, name: "口腔外科", price: "¥380起" },
    { id: 9, name: "其他服务" },
  ];

  // 时间选项
  const timeSlots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
  ];

  return (
    <div>
      {/* 页面标题 */}
      <section className="bg-blue-50 dark:bg-gray-800 py-16">
        <div className="container mt-16 px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-blue-800 dark:text-white mb-4">
              在线预约
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              填写以下表单，预约您的口腔健康服务，我们将尽快与您联系确认。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 预约表单 */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <motion.div
              className="lg:col-span-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-blue-800 dark:text-white mb-6">
                  预约信息
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                        姓名 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                        placeholder="请输入您的姓名"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                        电话 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                        placeholder="请输入您的联系电话"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                        选择诊所
                      </label>
                      <select
                        name="clinic"
                        value={formData.clinic}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                      >
                        <option value="">请选择诊所</option>
                        {clinics.map((clinic) => (
                          <option key={clinic.id} value={clinic.name}>
                            {clinic.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                        预约项目 
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                      >
                        <option value="">请选择预约项目</option>
                        {services.map((service) => (
                          <option key={service.id} value={service.name}>
                            {service.name} {service.price}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                        预约日期 
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                        预约时间 
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                      >
                        <option value="">请选择预约时间</option>
                        {timeSlots.map((time, index) => (
                          <option key={index} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                      备注信息
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                      placeholder="请输入您的特殊需求或问题（选填）"
                      rows={4}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg shadow-md hover:shadow-lg transition-all text-lg font-medium"
                  >
                    提交预约
                  </button>
                </form>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeInUp}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-lg mb-8"
              >
                <h3 className="text-xl font-bold text-blue-800 dark:text-white mb-4">
                  预约提示
                </h3>
                <ul className="space-y-3">
                  {[
                    "请提前15分钟到达诊所，填写必要的健康问卷",
                    "如需取消或更改预约，请提前24小时联系我们",
                    "初诊患者请携带有效身份证件",
                    "有特殊疾病史的患者请提前告知我们",
                    "如需全身麻醉，请提前进行相关检查",
                  ].map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <i className="fa-solid fa-info-circle text-blue-600 dark:text-blue-400 mt-1 mr-2 flex-shrink-0"></i>
                      <span className="text-gray-600 dark:text-gray-300">
                        {tip}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-blue-800 dark:text-white mb-4">
                  联系方式
                </h3>
                <div className="space-y-4">
                  {clinics.map((clinic) => (
                    <div
                      key={clinic.id}
                      className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700 last:border-0 last:mb-0 last:pb-0"
                    >
                      <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">
                        {clinic.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                        {clinic.address}
                      </p>
                      <div className="flex items-center">
                        <i className="fa-solid fa-phone text-blue-600 dark:text-blue-400 mr-2"></i>
                        <span className="text-gray-600 dark:text-gray-300">
                          {clinic.id === 1 ? "024-12345678" : "024-87654321"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* <motion.div
                variants={fadeInUp}
                className="mt-8 bg-blue-600 text-white p-6 rounded-2xl shadow-lg text-center"
              >
                <h3 className="text-xl font-bold mb-4">需要立即咨询？</h3>
                <p className="mb-6">我们的客服人员随时为您提供帮助</p>
                <button className="bg-white text-blue-600 px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all font-medium">
                  在线咨询
                </button>
              </motion.div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 预约流程 */}
      <section className="py-20 bg-blue-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 dark:text-white mb-4">
              预约流程
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              简单几步，轻松完成预约，开启您的口腔健康之旅。
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                step: 1,
                title: "填写表单",
                description: "选择您方便的诊所、服务项目和时间",
                icon: "fa-file-alt",
              },
              {
                step: 2,
                title: "提交预约",
                description: "确认信息无误后，提交您的预约申请",
                icon: "fa-paper-plane",
              },
              {
                step: 3,
                title: "收到确认",
                description: "我们的客服人员将通过电话或短信与您确认",
                icon: "fa-check-circle",
              },
              {
                step: 4,
                title: "按时就诊",
                description: "按照预约时间前往诊所，享受专业服务",
                icon: "fa-calendar-check",
              },
            ].map((item) => (
              <motion.div
                key={item.step}
                variants={fadeInUp}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative"
              >
                <div className="absolute -top-5 -left-5 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  {item.step}
                </div>
                <div className="pt-6">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <i
                      className={`fa-solid ${item.icon} text-blue-600 dark:text-blue-300 text-2xl`}
                    ></i>
                  </div>
                  <h3 className="text-xl font-bold text-blue-800 dark:text-white mb-2 text-center">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

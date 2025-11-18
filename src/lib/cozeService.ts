/**
 * Coze智能体服务
 * 用于处理与Coze智能体的通信
 */

// 模拟的Coze API响应延迟
const MOCK_RESPONSE_DELAY = 1000;

// 模拟的智能体回复内容
const MOCK_RESPONSES = [
  "您好！欢迎咨询袋鼠口腔，我是智能客服助手。请问有什么可以帮助您的吗？",
  "我们的营业时间是周一至周日 9:00-18:00，您可以随时前来就诊。",
  "我们提供口腔检查、牙齿美白、补牙、根管治疗、种植牙、牙齿矫正等多种服务。",
  "您可以通过我们的官网在线预约，或者拨打我们的电话进行预约。",
  "我们有两家分店，分别位于抚顺市顺城区和望花区，您可以选择离您较近的诊所就诊。",
  "初诊患者请提前15分钟到达诊所，填写必要的健康问卷。",
  "如需取消或更改预约，请提前24小时联系我们。"
];

/**
 * 向Coze智能体发送消息并获取回复
 * 注意：在实际项目中，需要替换为真实的Coze API调用
 */
export async function sendMessageToCozeAgent(message: string): Promise<string> {
  try {
    // 这里是模拟API调用，在实际项目中需要替换为真实的API调用
    // 真实的API调用可能类似于：
    // const response = await fetch('https://api.coze.com/v1/chat/completions', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer YOUR_API_KEY`
    //   },
    //   body: JSON.stringify({
    //     model: 'YOUR_AGENT_ID',
    //     messages: [{ role: 'user', content: message }]
    //   })
    // });
    // const data = await response.json();
    // return data.choices[0].message.content;
    
    // 模拟网络延迟
    await new Promise(resolve => setTimeout(resolve, MOCK_RESPONSE_DELAY));
    
    // 返回模拟的回复
    const randomResponse = MOCK_RESPONSES[Math.floor(Math.random() * MOCK_RESPONSES.length)];
    return randomResponse;
  } catch (error) {
    console.error('Failed to get response from Coze agent:', error);
    return '很抱歉，我暂时无法为您提供回答。请稍后再试或联系客服热线。';
  }
}
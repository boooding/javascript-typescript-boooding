/**
 * 实现微信消息发送的函数 【真实应用场景, 一站理解函数重载优势】
 *
 * 真实应用需求：有一个获取微信消息发送接口消息查找函数，
 * 根据传入的参数从数组中查找数据，如果入参为数字，
 * 就认为消息 id，然后从从后端数据源中找对应 id 的数据并返回，
 * 否则当成类型，返回这一类型的全部消息。
 */
type MessageType = 'image' | 'audio' | string;

type Message = {
    id: number;
    type: MessageType,
    sendMessage: string,
}
import { useTonConnectUI } from '@tonconnect/ui-react';
import { Sender, SenderArguments,beginCell } from '@ton/core';

export function useTonConnect(): { sender: Sender; connected: boolean } {
  const [tonConnectUI] = useTonConnectUI();

  const messageBody = beginCell()
      .storeUint(0, 32) // 写入32个零位以表示后面将跟随文本评论
      .storeStringTail("Hello, Wallet!") // 写下我们的文本评论
      .endCell();

  return {
    sender: {
      send: async (args: SenderArguments) => {
        const transaction = {
            messages: [
              {
                address: args.to.toString(),
                amount: args.value.toString(),
                payload: messageBody.toBoc().toString('base64'),
              },
            ],
            validUntil: Date.now() + 5 * 60 * 1000, // 5 minutes for user to approve
        }
        
        try {
            console.log("start");
            const result = await tonConnectUI.sendTransaction(transaction);
            console.log(result);        

        } catch (e) {
            console.error(e);
        }
      },
    },
    connected: tonConnectUI.connected,
  };
}
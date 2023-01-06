export const Paragraphs = () => {
  return (
    <div className="pt-12">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="mx-auto my-4 rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-1">
            <div className="h-full rounded-lg bg-white p-4 shadow-md">
              <strong>Sentiment analysis</strong>
              <p className="leading-relaxed text-gray-700">
                Identify the overall sentiment expressed in a conversation or message, whether it's positive, negative, or neutral. This can help you gauge how people are feeling and respond accordingly.
              </p>
            </div>
          </div>
          <div className="mx-auto my-4 rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-1">
            <div className="h-full rounded-lg bg-white p-4 shadow-md">
              <strong>Keyword extraction</strong>
              <p className="leading-relaxed text-gray-700">
                Extract important keywords or phrases from a conversation or message, helping you understand its main points quickly.
              </p>
            </div>
          </div>
          <div className="mx-auto my-4 rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-1">
            <div className="h-full rounded-lg bg-white p-4 shadow-md ">
              <strong>Topic modeling</strong>
              <p className="leading-relaxed text-gray-700">
                Our Slack bot uses topic modeling to identify the main topics being discussed in a conversation or group of messages. This can help you understand what people are talking about and join the conversation more easily.
              </p>
            </div>
          </div>
          <div className="mx-auto my-4 rounded-xl bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 p-1">
            <div className="h-full rounded-lg bg-white p-4 shadow-md">
              <strong>Summarization</strong>
              <p className="leading-relaxed text-gray-700">
                Generate a concise summary of a conversation or group of messages using text summarization techniques. This can help you stay up to date even if you don't have time to read everything.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

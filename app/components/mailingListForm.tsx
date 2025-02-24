import { Form } from "react-router";

export default function MailingListForm({ actionData }: any) {
  return (
    <>
      <Form id="mailing-list-form" method="post" className="flex flex-col items-center gap-4 md:gap-2 w-full md:p-4">
          <div className="w-3/4 md:w-1/2 xl:w-1/3 2xl:w-1/4">
            <label className="flex flex-col text-center gap-1">
              Email
              <input
                defaultValue=""
                name="email"
                placeholder="email@rohna.com"
                type="email"
                className="text-lg text-center w-full p-2 rounded-xl bg-white/10 outline-2 outline-white placeholder-white/50 hover:bg-white/20 transition-all duration-300 ease-in-out shadow-none hover:shadow-black/20 hover:shadow-md"
              />
            </label>
          </div>
          <div aria-hidden="true" className="absolute left-[-5000px]">
            {/* real people should not fill this in and expect good things */}
            <input type="text" name="name" tabIndex={-1}></input>
          </div>
        <button type="submit" className="text-white text-center uppercase font-bold text-xl mt-2 w-3/4 md:w-1/2 xl:w-1/3 2xl:w-1/4 py-2 md:text-xl rounded-2xl bg-orange transition-all duration-300 ease-in-out shadow-none hover:shadow-orange/50 hover:shadow-lg hover:scale-105">Subscribe</button>
      </Form>
      {
        !actionData
          ? null
          : actionData.message
          ? (<p className="text-center mt-4 text-sm font-normal italic">{actionData.message}</p>)
          : (<p className="text-center mt-4 text-sm font-normal italic">{actionData.email} successfully subscribed.</p>)
      }
    </>
  );
}

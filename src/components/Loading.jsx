import loader from "/loader.gif";

function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <img className="h-[50%]" src={loader} alt="" />
    </div>
  );
}

export default Loading;

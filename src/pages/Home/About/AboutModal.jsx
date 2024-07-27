import { IoMdClose } from "react-icons/io";
const AboutModal = () => {
  return (
    <div>
      <button
        onClick={() => document.getElementById("my_modal_3").showModal()}
        className="relative px-6 py-3 font-bold text-white rounded-lg group"
      >
        <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-[#2accd5] ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-[#185c60] ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
        <span className="relative">Basic Information</span>
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-[#09152d]">
          <form method="dialog">
            <button
              style={{ boxShadow: "0px 0px 10px 2px #03e9f4" }}
              className="btn text-xl btn-circle btn-sm border bg-transparent border-[#03e9f4] hover:bg-[#03e9f4] hover:text-white text-[#03e9f4] hover:border-white absolute right-2 top-2"
            >
              <IoMdClose />
            </button>
          </form>
          <div className="space-y-5 mt-10">
            <h3 className="text-xl font-bold text-center border-b-2 w-fit mx-auto text-[#03e9f4]">
              My Basic Information:
            </h3>
            <h3 className="text-slate-400 text-xl font-medium">
              <span className="text-[#03e9f4] font-bold">Name</span>: Yasin
              Hasan,
            </h3>
            <h3 className="text-slate-400 text-xl font-medium">
              <span className="text-[#03e9f4] font-bold">Religion</span>: Islam,
            </h3>
            <h3 className="text-slate-400 text-xl font-medium">
              <span className="text-[#03e9f4] font-bold">Country</span>:
              Bangladesh,
            </h3>
            <h3 className="text-slate-400 text-xl font-medium">
              <span className="text-[#03e9f4] font-bold">Age</span>: 20,
            </h3>
            <h3 className="text-slate-400 text-xl font-medium">
              <span className="text-[#03e9f4] font-bold">Language</span>:
              Bangla, Hindi, English (Basic),
            </h3>
            <h3 className="text-slate-400 text-xl font-medium">
              <span className="text-[#03e9f4] font-bold">Role</span>: Frontend
              Developer,
            </h3>
            <h3 className="text-slate-400 text-xl font-medium">
              <span className="text-[#03e9f4] font-bold">Habbit</span>: Coding,
              Gaming, Music, Movies.
            </h3>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AboutModal;

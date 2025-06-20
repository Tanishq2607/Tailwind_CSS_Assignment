import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-md px-9 py-6 w-[390px] text-center">
        <div className="flex justify-center">
          <Image src="/nahid_photo.png" alt="Img" width={130} height={130} />
        </div>

        <h1 className="text-2xl font-semibold font-sans mt-5 text-black">
          Nahid Hasan
        </h1>
        <p className="text-gray-400 mt-1.5 font-sans">UX/UI Designer</p>

        <div className="flex justify-center mt-3 mb-4">
          <Image src="/Star_light.png" alt="rating" width={20} height={2} />
          <Image src="/Star_light.png" alt="rating" width={20} height={2} />
          <Image src="/Star_light.png" alt="rating" width={20} height={2} />
          <Image src="/Star_light.png" alt="rating" width={20} height={2} />
          <Image src="/Star_light_1.png" alt="rating" width={20} height={2} />
        </div>

        <p className="text-sm text-gray-500 mb-4 px-2 font-sans">
          UI is the saddle, the stirrups, & the reins. UX is the feeling you get
          being able to ride the horse.
        </p>

        <button className="bg-indigo-500 text-white px-15 py-3 rounded-md font-medium font-sans mt-5 hover:bg-indigo-600 cursor-pointer">
          Follow
        </button>

        <div className="border-t border-gray-300 mt-4 mb-8"></div>

        <div className="flex justify-center gap-9">
          <div>
            <p className="font-sans text-black mb-1">5896</p>
            <p className="font-sans text-gray-400 text-sm">Post</p>
          </div>
          <div>
            <p className="font-sans text-black mb-1">8952</p>
            <p className="font-sans text-gray-400 text-sm">Followers</p>
          </div>
          <div>
            <p className="font-sans text-black mb-1">6545</p>
            <p className="font-sans text-gray-400 text-sm">Likes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

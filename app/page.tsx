import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="">
        <div>
          <Image src="/nahid_photo.png" alt="Description of my image" width={100} height={100} />
        </div>
        <div>
          <h1>Nahid Hasan</h1>
          <p>UX/UI Designer</p>
        </div>
        <div>
          <Image src="/rating.png" alt="Description of my image" width={70} height={70} />
        </div>
        <div>
          <p>UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.</p>
          <button className="px-[40px] py-[16px] bg-[#5D5FEF] text-amber-50 rounded-md">Follow</button>
        </div>
        <div className="flex">
          <div>
            <h4>5896</h4>
            <p>Posts</p>
          </div>
          <div>
            <h4>8952</h4>
            <p>Followers</p>
          </div>
          <div>
            <h4>6545</h4>
            <p>Likes</p>
          </div>
        </div>
      </div>
    </>
  );
}

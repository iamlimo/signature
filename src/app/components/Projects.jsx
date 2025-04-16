import Link from "next/link";

export default function Projects() {
  return (
    <>
      <div className="flex items-center gap-2 episode">
        <div className=" px-6 py-4 mr-3 ep">
          <img className="rounded-md" src="/ep_1.jpg" alt="" width={200} />
        </div>
        <div className=" px-6 py-4 ep">The Heir of Oyinde – Ilẹkẹ Ep.01</div>
        <div className=" px-6 py-4 ep">Director: Gafar Amoo</div>
        <div className=" px-6 py-4 ep">
          <Link href="https://www.youtube.com/watch?v=4mFxqJAqX9k&t=747s&pp=ygUFaWxla2U%3D">
            Watch now
          </Link>
        </div>
      </div>
      {/* end of episode 1 */}
      <div className="flex items-center gap-2 episode">
        <div className=" px-6 py-4 mr-3 ep">
          <img className="rounded-md" src="/ep_2.jpg" alt="" width={200} />
        </div>
        <div className=" px-6 py-4 ep">The Heir of Oyinde – Ilẹkẹ Ep.01</div>
        <div className=" px-6 py-4 ep">Director: Gafar Amoo</div>
        <div className=" px-6 py-4 ep">
          <Link href="https://www.youtube.com/watch?v=csNc7NrDYiw&list=PLliSCxwabPSLpNhaHG7ia4AnvOh7Q3wOP&index=2&ab_channel=SignaturePicturesNetwork">
            Watch now
          </Link>
        </div>
      </div>
      {/* end of episode 2 */}
      <div className="flex items-center gap-2 episode">
        <div className=" px-6 py-4 mr-3 ep">
          <img className="rounded-md" src="/ep_3.jpg" alt="" width={200} />
        </div>
        <div className=" px-6 py-4 ep">The Heir of Oyinde – Ilẹkẹ Ep.01</div>
        <div className=" px-6 py-4 ep">Director: Gafar Amoo</div>
        <div className=" px-6 py-4 ep">
          <Link href="https://www.youtube.com/watch?v=ocvj_U9YWGM&list=PLliSCxwabPSLpNhaHG7ia4AnvOh7Q3wOP&index=3&ab_channel=SignaturePicturesNetwork">
            Watch now
          </Link>
        </div>
      </div>
      {/* end of episode 3 */}
      <div className="flex items-center gap-2 episode">
        <div className=" px-6 py-4 mr-3 ep">
          <img className="rounded-md" src="/ep_4.jpg" alt="" width={200} />
        </div>
        <div className=" px-6 py-4 ep">The Heir of Oyinde – Ilẹkẹ Ep.01</div>
        <div className=" px-6 py-4 ep">Director: Gafar Amoo</div>
        <div className=" px-6 py-4 ep">
          <Link href="https://www.youtube.com/watch?v=k75SpbHqVZA&list=PLliSCxwabPSLpNhaHG7ia4AnvOh7Q3wOP&index=4&ab_channel=SignaturePicturesNetwork">
            Watch now
          </Link>
        </div>
      </div>
      {/* end of episode 4 */}
    </>
  );
}

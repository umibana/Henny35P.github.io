import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export interface ProjectProps {
  name: string;
  description: string;
  img: string;
  url: string;
}

export default function ProjectCard(props: ProjectProps) {
  return (
    <div className="bg-zinc-800 rounded-xl shadow-black shadow-2xl">
      <img src={props.img} className="rounded-xl object-cover" />
      <div className="grid grid-cols-1 place-items-center mx-4 ">
        <div>
          <h1 className="text-zinc-50 text-xl underline underline-offset-2">
            {" "}
            {props.name}{" "}
          </h1>
        </div>
        <div>
          <p className="text-zinc-200 break-words"> {props.description}</p>
        </div>
        <div>
          <FontAwesomeIcon className="h-6 md:h-12" icon={faGithub} />
        </div>
      </div>
    </div>
  );
}

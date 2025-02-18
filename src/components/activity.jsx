import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {GitBranch, GitCommit, GitPullRequest, Star} from "lucide-react";
import FetchRepos from "../utils/gitRepos";

export default function GitHubActivityTimeline() {
  const [repos, setRepos] = useState([]);
  const [totalEvents, setTotalEvents] = useState(0);
  const dateTime = new Date();
  const month = (dateTime.getMonth() + 1).toString().padStart(2, "0");
  const date = `${dateTime.getFullYear()}-${month}`;

  function filterEvents(events) {
    setRepos((prev) => {
      const updateRepos = [...prev];

      events.forEach((event) => {
        const validation = updateRepos.find(
          (repo) => repo.id === event.repo.id
        );

        if (validation === undefined) {
          updateRepos.push({
            id: event.repo.id,
            name: event.repo.name,
            type: {
              PushEvent: event.type === "PushEvent" ? 1 : 0,
              CreateEvent: event.type === "CreateEvent" ? 1 : 0,
              PullRequestEvent: event.type === "PullRequestEvent" ? 1 : 0,
              WatchEvent: event.type === "WatchEvent" ? 1 : 0,
            },
            events: 1,
          });
        } else {
          updateRepos.map((repo) => {
            if (repo.id === validation.id) {
              repo.events = repo.events + 1;
              switch (event.type) {
                case "PushEvent":
                  repo.type.PushEvent += 1;
                  break;
                case "CreateEvent":
                  repo.type.CreateEvent += 1;
                  break;
                case "PullRequestEvent":
                  repo.type.PullRequestEvent += 1;
                  break;
                case "WatchEvent":
                  repo.type.WatchEvent += 1;
                  break;
              }
            }
          });
        }
      });
      return updateRepos;
    });
  }

  useEffect(() => {
    async function getRepos() {
      try {
        const response = await FetchRepos();
        if (response) {
          const result = response.filter((repo) =>
            repo.created_at.includes(date)
          );
          console.log(result);
          filterEvents(result);
          setTotalEvents(result.length);
        }
      } catch (error) {
        console.error("Error fetching repos:", error);
      }
    }
    getRepos();
  }, [date]);

  return (
    <div className="w-full lg:max-w-xl max-h-[720px]  mx-auto rounded-md border border-[#3d3d3d]  overflow-y-scroll">
      <div className="p-6">
        <div className="inline-flex justify-baseline gap-1">
          <h2 className=" text-white mb-6">Mi actividad de GitHub</h2>
          <p className="text-[0.8rem] text-gray-500">({date})</p>
        </div>
        <div className="space-y-5">
          {repos.length > 0 ? (
            repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: index * 0.1}}
                className=" border border-[#3d3d3d]  p-4 rounded-lg overflow-hidden"
                onClick={() => {
                  console.log(repo.type);
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-md  text-white">{repo.name}</h3>
                  <span className="text-sm text-gray-300">
                    {repo.events} eventos
                  </span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2 mb-4">
                  <div
                    className="bg-white h-2 rounded-full"
                    style={{width: `${(repo.events / totalEvents) * 100}%`}}
                  ></div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex justify-center items-center text-gray-300 gap-1">
                    <GitCommit className="text-white w-4 h-4" />
                    {repo.type.PushEvent}
                  </div>
                  <div className="inline-flex justify-center items-center text-gray-300 gap-1">
                    <GitBranch className="text-white  w-4 h-4" />
                    {repo.type.CreateEvent}
                  </div>
                  <div className="inline-flex justify-center items-center text-gray-300 gap-1">
                    <GitPullRequest className="text-white  w-4 h-4" />
                    {repo.type.PullRequestEvent}
                  </div>
                  <div className="inline-flex justify-center items-center text-gray-300 gap-1">
                    <Star className="text-white  w-4 h-4" />
                    {repo.type.WatchEvent}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-300">
              No se pudo cargar la actividad reciente 😕
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

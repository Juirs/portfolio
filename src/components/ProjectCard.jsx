import { useNavigate } from "react-router-dom";
import indieverse from "../assets/project/indieverse.png"

function ProjectCard({ project }) {
    const navigate = useNavigate();

    const handleProjectClick = () => {
        navigate(`/project/${project.id}`);
    };

    const truncateDescription = (description, maxLength = 200) => {
        if (!description) return '';
        if (description.length <= maxLength) return description;
        return description.substring(0, maxLength).trim() + '...';
    };

    return (
        <div
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={handleProjectClick}
        >
            <div className="relative">
                <img
                    src={project?.image || indieverse}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-100 mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-2">{truncateDescription(project.description)}</p>
                <div className="flex flex-wrap gap-2 items-center">
                    {project.tags.map(tag => (
                        <span key={tag} className="bg-amber-900 text-amber-200 px-3 py-1 rounded-full text-sm">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
import { useParams } from "react-router-dom";
import Appbar from "../component/Appbar";
import FullBlog from "../component/FullBlog";
import { useBlog } from "../hooks";

export default function BlogPage() {
  const { id } = useParams();
  const { loading, blog }: any = useBlog({
    id: id || "",
  });

  if (loading) {
    return (
      <div>
        <Skeleton />
      </div>
    );
  }
  return (
    <div>
      <FullBlog blog={blog} />
    </div>
  );
}

const Skeleton = () => {
  return (
    <div>
      <Appbar />
      <div className="min-h-screen py-8">
        <main className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8">
              <div className="bg-white rounded-lg p-6">
                <div className="space-y-4">
                  <div className="h-8 bg-gray-100 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-100 rounded w-1/4"></div>
                  <div className="space-y-2">
                    {[...Array(15)].map((_, index) => (
                      <div
                        key={index}
                        className="h-4 bg-gray-100 rounded"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <div className="bg-white rounded-lg p-6">
                <div className="space-y-4">
                  <div className="h-6 bg-gray-100 rounded w-1/3"></div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-100 rounded w-24"></div>
                      <div className="h-3 bg-gray-100 rounded w-32"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>{" "}
    </div>
  );
};

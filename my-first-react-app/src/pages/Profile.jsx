import { useState } from "react";
import Title from "../components/Title";
import meomeo from "../assets/meomeo.png";

function Profile() {
  const [profileImage, setProfileImage] = useState(meomeo);
  const [name, setName] = useState("Yunni Nguyen");
  const [email, setEmail] = useState("yunni.nguyen225@gmail.com");
  const [language, setLanguage] = useState("English");
  const [notifications, setNotifications] = useState(true);

  const [dietary, setDietary] = useState({
    vegetarian: false,
    vegan: false,
    lowSugar: true,
    dairyFree: false,
  });

  const [savedRecipes, setSavedRecipes] = useState([
    { id: 1, name: "Avocado Toast", time: "10 min", category: "Breakfast" },
    { id: 2, name: "Chicken Salad", time: "20 min", category: "Healthy" },
    { id: 3, name: "Spaghetti", time: "30 min", category: "Dinner" },
  ]);

  const [activities] = useState([
    "update later",
    "",
    "",
  ]);

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  }

  function handleDietChange(event) {
    const { name, checked } = event.target;
    setDietary((prev) => ({
      ...prev,
      [name]: checked,
    }));
  }

  function removeRecipe(id) {
    setSavedRecipes(savedRecipes.filter((recipe) => recipe.id !== id));
  }

  return (
    <div className="min-h-screen bg-[#f8f5ef] px-6 py-8">
      <Title myTitle="Profile" mySubtitle="Manage your account" />

      <div className="max-w-6xl mx-auto mt-8 grid gap-6">
        <div className="bg-white rounded-3xl shadow-md p-6 flex flex-col md:flex-row gap-6 items-center">
          <div className="flex flex-col items-center">
            <img
              src={profileImage}
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border-4 border-green-200"
            />

            <label className="mt-4 bg-green-200 hover:bg-green-300 px-4 py-2 rounded-xl font-medium cursor-pointer">
              Change Photo
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>

          <div className="flex-1 w-full grid gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-200"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-200"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl shadow-md p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Preferences</h3>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Language
                </label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white"
                >
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  Dietary Preferences
                </p>

                <div className="grid grid-cols-2 gap-3 text-gray-700">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="vegetarian"
                      checked={dietary.vegetarian}
                      onChange={handleDietChange}
                    />
                    Vegetarian
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="vegan"
                      checked={dietary.vegan}
                      onChange={handleDietChange}
                    />
                    Vegan
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="lowSugar"
                      checked={dietary.lowSugar}
                      onChange={handleDietChange}
                    />
                    Low Sugar
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="dairyFree"
                      checked={dietary.dairyFree}
                      onChange={handleDietChange}
                    />
                    Dairy Free
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-between bg-[#fdfaf4] rounded-xl px-4 py-3">
                <span className="font-medium text-gray-700">Notifications</span>
                <button
                  onClick={() => setNotifications(!notifications)}
                  className={`px-4 py-2 rounded-xl font-medium ${
                    notifications
                      ? "bg-green-200 text-gray-800"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {notifications ? "On" : "Off"}
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-md p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Recent Activity</h3>

            <div className="space-y-3">
              {activities.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#fdfaf4] rounded-xl px-4 py-3 text-gray-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Saved Recipes</h3>

          <div className="grid md:grid-cols-3 gap-4">
            {savedRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-[#fdfaf4] border border-[#eee6d8] rounded-2xl p-4 shadow-sm"
              >
                <h4 className="text-xl font-semibold text-gray-800">
                  {recipe.name}
                </h4>
                <p className="text-gray-500 mt-2">Time: {recipe.time}</p>
                <p className="text-gray-500 mb-4">
                  Category: {recipe.category}
                </p>

                <button
                  onClick={() => removeRecipe(recipe.id)}
                  className="bg-orange-200 hover:bg-orange-300 px-4 py-2 rounded-xl font-medium text-gray-800"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button className="bg-red-200 hover:bg-red-300 px-5 py-3 rounded-xl font-semibold text-gray-800">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
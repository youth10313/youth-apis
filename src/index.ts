import Login from "./apis/auth/login";
import Register from "./apis/auth/register";
import Profile from "./apis/auth/profile";
import Users from "./apis/auth/users";
import Departments from "./apis/auth/departments";
import Employees from "./apis/auth/employees";
import Cloud from "./apis/cloud";
import NLP from "./apis/data/nlp";
import Core from "./apis/data/core";
import Feeds from "./apis/data/feeds";
import Settings from "./apis/data/settings";
import Translations from "./apis/data/translate";
import Ads from "./apis/office/ads";
import Assets from "./apis/office/assets";
import Blazer from "./apis/office/blazer";
import Citizens from "./apis/office/citizens";
import Communication from "./apis/office/communication";
import Reports from "./apis/office/reports";
import Complaints from "./apis/office/complaints";

const YouthServers = {
    Auth: {
        Login,
        Register,
        Profile,
        Users,
        Departments,
        Employees
    },
    Cloud,
    Data: {
        NLP,
        Core,
        Feeds,
        Settings,
        Translations
    },
    Office: {
        Ads,
        Assets,
        Blazer,
        Citizens,
        Communication,
        Complaints,
        Reports
    }
}

export default YouthServers;


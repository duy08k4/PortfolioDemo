import db from "./config";

import { getDoc, getDocs, doc, collection } from "firebase/firestore";

const data = getDoc(doc(db, "data", "info"))
const projects = getDocs(collection(db, "project"))
const skills = getDoc(doc(db, "data", "skills"))

class myData {
    async #check_data() {
        if ((await data).exists()) {
            return true
        }
        return false
    }

    async #check_skills() {
        if ((await skills).exists()) {
            return true
        }
        return false
    }

    async #check_projects() {
        if (!(await projects).empty) {
            return true
        }
        return false
    }

    #edit_urlshare_drive(url) {
        const regex = /\/d\/([a-zA-Z0-9_-]+)\//;
        const match = url.match(regex);

        return match ? `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1000` : null;
    }

    async getSocialData() {
        if (!this.#check_data()) return {}
        let socialData = (await data).data()
        return {
            github: socialData.github,
            facebook: socialData.facebook,
            tiktok: socialData.tiktok
        }
    }

    async getNameSkill() {
        if (!this.#check_skills()) return []
        let nameSkill = (await skills).data().name
        return nameSkill
    }

    async getImgSkill() {
        if (!this.#check_skills()) return []
        let imgSkill = (await skills).data().imgSkill
        let imgSkill_edited = imgSkill.map((url_data) => {
            return this.#edit_urlshare_drive(url_data)
        })

        return imgSkill_edited
    }

    async getBasicData() {
        if (!this.#check_data()) return {}
        let basicData = (await data).data()
        return {
            name: basicData.name,
            avatar: this.#edit_urlshare_drive(basicData.avatar),
            mycv: basicData.mycv,
            major: basicData.major,
            level: basicData.level,
            position: basicData.position,
            myIntro: basicData.myIntro
        }
    }

    async getProject() {
        if (!this.#check_projects()) return []
        let myProject = (await projects).docs.map((data) => data.data())
        let myProject_editedAvatar = myProject.map((data) => {
            data.avatar = this.#edit_urlshare_drive(data.avatar)
            return data
        })
        return myProject_editedAvatar
    }
}

export default myData
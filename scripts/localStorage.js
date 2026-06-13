export default class display {

    static getTotalBudget() {
        const totalBudget = localStorage.getItem("totalBudget") || "0";
        return totalBudget;
    }

    static setTotalBudget(num) {
        localStorage.setItem("totalBudget", num);
    }

    static getAllTrans() {
        const data = localStorage.getItem("trans-data") || "[]";
        const transData = JSON.parse(data);
        return transData;
    }

    static saveTrans(trans = {}) {
        const allTrans = display.getAllTrans();

        const existing = allTrans.find(item => item.id == trans.id);

        if (existing) {
            existing.amount = trans.amount;
            existing.tag = trans.tag;
        } else {
            allTrans.unshift(trans);
        }

        localStorage.setItem("trans-data", JSON.stringify(allTrans));
    }

    static deleteTrans(id) {
        const allTrans = display.getAllTrans();
        const tranId = Number(id);

        const filteredTrans = allTrans.filter(
            item => item.id != tranId
        );

        localStorage.setItem(
            "trans-data",
            JSON.stringify(filteredTrans)
        );
    }

    static findTran(id) {
        const allTrans = display.getAllTrans();
        const tranId = Number(id);

        return allTrans.find(
            item => item.id == tranId
        );
    }

    // Always return only one tag
    static getAllTags() {
        return ["Chandini"];
    }

    // Prevent adding new tags
    static saveTag(str) {
        localStorage.setItem(
            "tags",
            JSON.stringify(["Chandini"])
        );
    }
}
export default {
    method () {
        getRestaurantList() {
            db.collection('rolls').onSnapshot(res => {
                const changes = res.docChanges();
                changes.forEach(change => {
                if (change.type === 'added') {
                    this.rolls.push({
                    ...change.doc.data(), //... spreads all data fields into rolls
                    id: change.doc.id
                    })
                }
                });
            }
        }
    }
}
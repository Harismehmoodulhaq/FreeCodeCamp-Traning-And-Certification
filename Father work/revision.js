// constractor pattren

class CardDatabase  {
    constructor (data) {
        if (CardDatabase.exists) {
            return CardDatabase.instance;
        }
        this.data = data;
        CardDatabase.instance = this;
        CardDatabase.exists = true;
        return this;
    }
}

class CardInventory {
    constructor (inventory) {
        if (CardInventory.exists) {
            return CardInventory.instance;
        }
        this.inventory = inventory;
        CardInventory.instance = this;
        CardInventory.exists = true;
        return this;
    }
}

class GetListData {
    list = []
    constructor (list) {
        this.list = list;
        return this.list;
    }
}

class AddToCart {
    addCart = GetListData(list)
    constructor () {
        return this.addCart;
    }
}

class OrderDispatch {
    OrderDispatch = AddToCart(this.addCart)
    constructor () {
        return this.OrderDispatch;
    }
}

class MoneyTransection {
    money;
    constructor (money) {
        this.money = money;
    }
}
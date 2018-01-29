$(document).ready(function () {
    var db = firebase.database();
    var b1000 = "";
    var b500 = "";
    var b100 = "";
    var a1000 = "1000 = ";
    var a500 = "500 = ";
    var a100 = "100 = ";
    var account = "";
    var account_val = "";
    var money = "";
    var money_val = "";
    var total = "10000";
    var result = "";

    $('#submit').live('click', function () {
        var balance = $('#balance').val();

        if (balance.length > 0) {
            if (balance <= 10000) {
                result = total - balance;
                if (balance.substr(-2) == 0) {
                    if (balance >= 1000) {
                        b1000 = Math.floor(balance / 1000);
                        account = balance - (b1000 * 1000);
                        if (account >= 500) {
                            b500 = Math.floor(account / 500);
                            account = account - (b500 * 500);
                            if (account >= 100) {
                                b100 = Math.floor(account / 100);
                            }
                        } else {
                            b500 = Math.floor(account / 500);
                            b100 = Math.floor(account / 100);
                        }


                        account_val = a1000 + b1000 + "ใบ" + a500 + b500 + "ใบ" + a100 + b100 + "ใบ";
                        $('#display').html(account_val);

                    } else if (balance > 500) {
                        b500 = Math.floor(balance / 500);
                        account = balance - (b500 * 500);
                        if (account >= 100) {
                            b100 = Math.floor(account / 100);
                        }
                        account_val = a500 + b500 + "ใบ" + a100 + b100 + "ใบ";
                        $('#display').html(account_val);
                    } else {
                        b100 = Math.floor(balance / 100);
                        account_val = a100 + b100 + "ใบ";
                        $('#display').html(account_val);
                    }


                    if (result >= 1000) {
                        b1000 = Math.floor(result / 1000);
                        money = result - (b1000 * 1000);
                        if (money >= 500) {
                            b500 = Math.floor(money / 500);
                            money = money - (b500 * 500);
                            if (money >= 100) {
                                b100 = Math.floor(money / 100);
                            }
                        } else {
                            b500 = Math.floor(money / 500);
                            b100 = Math.floor(money / 100);
                        }

                        money_val = a1000 + b1000 + "ใบ" + a500 + b500 + "ใบ" + a100 + b100 + "ใบ";
                        $('#display').html(money_val);

                    } else if (result > 500) {
                        b500 = Math.floor(result / 500);
                        money = result - (b500 * 500);
                        if (money >= 100) {
                            b100 = Math.floor(money / 100);
                        }
                        money_val = a500 + b500 + "ใบ" + a100 + b100 + "ใบ";
                        $('#display').html(money_val);
                    } else {
                        b100 = Math.floor(result / 100);
                        money_val = a100 + b100 + "ใบ";
                        $('#display').html(money_val);
                    }

                }
                else {
                    $('#balance').focus();
                    alert('ไม่สามารถถอนเงินต่ำกว่าหลักสิบได้');
                }

            } else {
                $('#balance').focus();
                alert('จำนวนเงินของคุณไม่พอหรือทำรายการไม่ถูกต้อง');
            }
        } else {
            alert('คุณยังไม่ได้ใส่จำนวนเงิน');
            $('#balance').focus();
        }
        document.getElementById("display").innerHTML = "จำนวนเงินคงเหลือ : " + "&nbsp;" + result + "บาท" + "&nbsp;" + "<br>" + "จำนวนธนบัตรที่เหลือ" + "&nbsp;" + money_val + "<br>" + "จำนวนธนบัตรที่ออก : " + account_val;
    });

    return result;
});
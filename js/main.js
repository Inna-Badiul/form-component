document.addEventListener("DOMContentLoaded", function () {
    var $checkboxes = document.getElementsByClassName("default-checkbox");
    var qs = document.querySelector.bind(document),
        $buyNowButton = qs(".button"),
        $selectedItemTitle = qs(".selected-item-title"),
        $formWrapper = qs(".form-wrapper"),
        $resultWrapper = qs(".result-wrapper");

    function toggleCheckedItem() {
        for (var i = 0; i < $checkboxes.length; i++) {
            $checkboxes[i].addEventListener("change", function () {
                if (this.checked == false) {
                    this.checked = true;
                } else {
                    var checkedItems = document.querySelectorAll("input:checked");
                    this.parentNode.className += " active";
                    for (var j = 0; j < checkedItems.length; j++) {
                        if (this !== checkedItems[j]) {
                            checkedItems[j].checked = false;
                            checkedItems[j].parentNode.className = checkedItems[j].parentNode.className.replace("active", "");
                        }
                    }
                }
            });
        }
    }
    toggleCheckedItem();

    function showResult() {
        $buyNowButton.addEventListener("click", function () {
            for (var k = 0; k < $checkboxes.length; k++) {
                if ($checkboxes[k].checked == true) {
                    $selectedItemTitle.innerText = $checkboxes[k].parentNode.querySelector(".item-title").innerHTML;
                }
            }
            $formWrapper.className += " hide-form";
            $resultWrapper.className += " show-result";
        });
    }
    showResult();
});
document.addEventListener("DOMContentLoaded", function () {
    var $checkboxes = document.querySelectorAll(".default-checkbox"),
        qs = document.querySelector.bind(document),
        $buyNowButton = qs(".button"),
        $selectedItemTitle = qs(".selected-item-title"),
        $formWrapper = qs(".form-wrapper"),
        $resultWrapper = qs(".result-wrapper"),
        $checkedItems;

    changeEventListener();
    buyButtonClickListener();
    
    addActiveClass(document.querySelector(".default-checkbox"));
    
    function changeEventListener() {
        for (var i = 0; i < $checkboxes.length; i++) {
            $checkboxes[i].addEventListener("change", function () {
                if (this.checked == false) {
                    this.checked = true;
                } else {
                    $checkedItems = document.querySelectorAll("input:checked");
                    addActiveClass(this);
                    for (var j = 0; j < $checkedItems.length; j++) {
                        if (this !== $checkedItems[j]) {
                            $checkedItems[j].checked = false;
                            removeActiveClass($checkedItems[j]);
                        }
                    }
                }
            });
        }
    }

    function buyButtonClickListener() {
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

    function addActiveClass(element) {
        element.parentNode.className += " active";
    }

    function removeActiveClass(element) {
        element.parentNode.className = element.parentNode.className.replace("active", "");
    }
});
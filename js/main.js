document.addEventListener("DOMContentLoaded", function () {
    var qs = document.querySelector.bind(document),
        qsAll = document.querySelectorAll.bind(document),
        $checkboxes = qsAll(".default-checkbox"),
        $buyNowButton = qs(".button"),
        $selectedItemTitle = qs(".selected-item-title"),
        $formWrapper = qs(".form-wrapper"),
        $resultWrapper = qs(".result-wrapper"),
        $defaultCheckbox = qs(".default-checkbox"),
        $checkedItems;

    addChangeEventListeners();
    buyButtonClickListener();

    addActiveClass($defaultCheckbox);

    function addChangeEventListeners() {
        for (var i = 0; i < $checkboxes.length; i++) {
            $checkboxes[i].addEventListener("change", function () {
                if (this.checked == false) {
                    this.checked = true;
                } else {
                    $checkedItems = qsAll("input:checked");
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
            $selectedItemTitle.innerText = qs("input:checked").parentNode.querySelector(".item-title").innerHTML;
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
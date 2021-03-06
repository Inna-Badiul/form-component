var formComponent = {
    init: function initFormComponent(el) {
        var qs = el.querySelector.bind(el),
            qsAll = el.querySelectorAll.bind(el),
            $checkboxes = qsAll(".default-checkbox"),
            $buyNowButton = qs(".button"),
            $selectedItemTitle = qs(".selected-item-title"),
            $formWrapper = qs(".form-wrapper"),
            $resultWrapper = qs(".result-wrapper"),
            $checkedCheckbox = qs("input:checked"),
            $checkedItems;
        addChangeEventListeners();
        buyButtonClickListener();
        addActiveClass($checkedCheckbox);//added active class to the selected checkbox here, because Firefox and Internet Explorer saves the state of the checkbox, after page reloading
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
    }
};
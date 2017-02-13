var checkboxes = document.getElementsByClassName("default-checkbox");

for(var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", function () {
        if (this.checked == false) {
            this.checked = true;
        } else {
            var checkedItems = document.querySelectorAll('input:checked');
            this.parentNode.className += " active";
            for (var j = 0; j < checkedItems.length; j++) {
                if(this !== checkedItems[j]){
                    checkedItems[j].checked = false;
                    checkedItems[j].parentNode.className = checkedItems[j].parentNode.className.replace("active","");
                }
            }
        }
    });
}

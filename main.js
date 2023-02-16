function displayPopup() {
    document.getElementById('mainButton').style.display = 'none';
    document.getElementById('mainForm').style.display = 'block';
}

function addSubDomain() {
    const div = document.createElement('div');
    let i = 0;

    div.className = 'row';

    div.innerHTML = `
        <div>
            <input type="text" class="sub-domain" name="sub-domain">    
            <button class="removeButton" onclick="removeRow(this)">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
            </button>
        </div>`;


    // document.getElementById('mainDiv').appendChild(div);
    // document.getElementById('domainAdd').appendChild(div);
    document.getElementById('child').appendChild(div);

}

function removeRow(elem) {
    elem.parentNode.outerHTML = '';
    
    // const x = elem.parentNode;
    // const y = x.getElementsByClassName('addButton')[0];
}

function showButton() {
    document.getElementById('mainButton').style.display = 'block';
    document.getElementById('mainForm').style.display = 'none';
}

function domainList() {
    var domain_list = document.getElementsByClassName('sub-domain');
    // var domain_list = document.getElementsByClassName('sub-domain').innerHTML;
    // console.log(domain_list[0].value);
    var sub_domain_list = [];
    for(let i=0; i<domain_list.length; i++) {
        sub_domain_list.push(domain_list[i].value);
    }
    console.log(sub_domain_list);
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-design',
  templateUrl: './test-design.component.html',
  styleUrls: ['./test-design.component.css']
})
export class TestDesignComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initialize_tab_js()
  }
  initialize_tab_js(){
    document.getElementById('image_tab').style.display = "block";
    let tab=document.getElementById('image_tab');
    tab.className+=" active";
    
  }
  clickHandle_js(evt,element_selected){
    let i, tabcontent, tablinks;

    // This is to clear the previous clicked content.
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Set the tab to be "active".
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Display the clicked tab and set it to active.
    document.getElementById(element_selected).style.display = "block";
    evt.currentTarget.className += " active";
  }
  kanban_view_js(evt,element_selected){
    document.getElementById('list_view').style.display="none"
    document.getElementById('kanban_view').style.display="block"
  }
  list_view_js(evt,element_selected){
    document.getElementById('kanban_view').style.display="none"
    document.getElementById('list_view').style.display="block"
  }
}

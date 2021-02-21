// prettier-ignore
export const STORE = {
  '0': {
    css:
`.parent {
  display: flex;  
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
</div>`,
  },
  '1': {
    css:
`.parent {
  display: flex;         
  justify-content: center;      
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
</div>`,
  },
  '2': {
    css:
`.parent {
  display: flex;         
  justify-content: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
</div>`,
  },
  '3': {
    css:
`.parent {
  display: flex;         
  flex-direction: column;
  justify-content: center;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
</div>`,
  },
  '4': {
    css:
`.parent {
  display: flex;         
  flex-direction: column;
  align-items: center;
  justify-content: center;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
</div>`,
  },
  '5': {
    css:
`.parent {
  display: flex;         
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
</div>`,
  },
  '6': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
</div>`,
  },
  '7': {
    css:
`.parent {
  display: flex;         
  flex-direction: column;
  align-items: center;      
  justify-content: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
</div>`,
  },
  '8': {
    css:
`.parent {
  display: flex;         
  flex-direction: column;
  align-items: flex-end;      
  justify-content: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
</div>`,
  },
  '0,1': {
    css:
`.parent {
  display: flex;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '0,2': {
    css:
`.parent {
  display: flex;
  justify-content: center;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '0,3': {
    css:
`.parent {
  display: flex;
  flex-direction: row;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '0,4': {
    css:
`.parent {  
  display: flex;
  flex-direction: column;
}

.child:nth-child(2) {
  align-self: center;
}
`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '0,5': {
    css:
`.parent {  
  display: flex;
  flex-direction: column;
}

.child:nth-child(1) {
  align-self: flex-start;
}

.child:nth-child(2) {
  align-self: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '0,6': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '0,7': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
}

.child:nth-child(2) {
  align-self: center;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '0,8': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
}

.child:nth-child(2) {
  align-self: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '1,2': {
    css:
`.parent {  
  display: flex;
  justify-content: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '1,3': {
    css:
`.parent {  
  display: flex;
  flex-direction: column;      
}

.child:nth-child(1){
  align-self: center;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '1,4': {
    css:
`.parent {  
  display: flex;
  flex-direction: column;    
  align-items: center;  
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '1,5': {
    css:
`.parent {  
  display: flex;
  flex-direction: column;
}

.child:nth-child(1){
  align-self: center;
}

.child:nth-child(2){
  align-self: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '1,6': {
    css:
`.parent {  
  display: flex;
  flex-direction: column;
  justify-content: space-between;    
}

.child:nth-child(1){
  align-self: center;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '1,7': {
    css:
`.parent {  
  display: flex;
  flex-direction: column;
  justify-content: space-between;    
}

.child:nth-child(1){
  align-self: center;
}

.child:nth-child(2){
  align-self: center;
} `,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '1,8': {
    css:
`.parent {  
  display: flex;
  flex-direction: column;      
  justify-content: space-between;    
}

.child:nth-child(1){
  align-self: center;
}

.child:nth-child(2){
  align-self: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '2,3': {
    css:
`.parent {  
  display: flex;
  flex-direction: column;
}

.child:nth-child(1){
  align-self: flex-end;
}

.child:nth-child(2){
  align-self: flex-start;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '2,4': {
    css:
`.parent {  
  display: flex;
  flex-direction: column;
}

.child:nth-child(1){
  align-self: flex-end;
}

.child:nth-child(2){
  align-self: center;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '2,5': {
    css:
`.parent {  
  display: flex;
  flex-direction: column;
}

.child:nth-child(1){
  align-self: flex-end;
}

.child:nth-child(2){
  align-self: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '2,6': {
    css:
`.parent {  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.child:nth-child(1){
  align-self: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '2,7': {
    css:
`.parent {  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.child:nth-child(1){
  align-self: flex-end;
}

.child:nth-child(2){
  align-self: center;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '2,8': {
    css:
`.parent {  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.child:nth-child(1){
  align-self: flex-end;
}

.child:nth-child(2){
  align-self: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '3,4': {
    css:
`.parent {  
  display: flex;
  align-items: center;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '3,5': {
    css:
`.parent {  
  display: flex;
  justify-content: space-between;
  align-items: center;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '3,6': {
    css:
`.parent {  
  display: flex;
  flex-direction: column;
  justify-content: flex-end; 
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '3,7': {
    css:
`.parent {  
  display: flex;
  flex-direction: column;
  justify-content: flex-end; 
}

.child:nth-child(2) {
  align-self: center;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '3,8': {
    css:
`.parent {  
  display: flex;
  flex-direction: column;
  justify-content: flex-end; 
}

.child:nth-child(2) {
  align-self: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '4,5': {
    css:
`.parent {  
  display: flex;
  flex-direction: column;
  justify-content: flex-end; 
}

.child:nth-child(2) {
  align-self: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '4,6': {
    css:
`.parent {  
  display: flex;  
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}
        
.child:nth-child(2){
  align-self: flex-start;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '4,7': {
    css:
`.parent {  
  display: flex;  
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;  
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '4,8': {
    css:
`.parent {  
  display: flex;  
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}        
.child:nth-child(2){
  align-self: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '5,6': {
    css:
`.parent {  
  display: flex;  
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}        

.child:nth-child(1){
  align-self: flex-end;
}

.child:nth-child(2){
  align-self: flex-start;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '5,7': {
    css:
`.parent {  
  display: flex;  
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
} 

.child:nth-child(1){
  align-self: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '5,8': {
    css:
`.parent {  
  display: flex;  
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}

.child:nth-child(1),
.child:nth-child(2) {
  align-self: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '6,7': {
    css:
`.parent {  
  display: flex;  
  flex-direction: row;
  align-items: flex-end;      
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '6,8': {
    css:
`.parent {  
  display: flex;  
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '7,8': {
    css:
`.parent {  
  display: flex;  
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '0,1,2': {
    css:
`.parent {  
  display: flex;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '0,1,3': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
}

.child:nth-child(1) {
  display: flex;
}`,
    html:
`
<div class="parent">
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
  <div class="child"></div>
</div>`,
  },
  '0,1,4': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
}

.child:nth-child(1) {
  display: flex;
}

.child:nth-child(2) {
  align-self: center;
}`,
    html:
`
<div class="parent">
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
  <div class="child"></div>
</div>`,
  },
  '0,1,5': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
}

.child:nth-child(1) {
  display: flex;
}

.child:nth-child(2) {
  align-self: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
  <div class="child"></div>
</div>`,
  },
  '0,1,6': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.child:nth-child(1) {
  display: flex;
}`,
    html:
`
<div class="parent">
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
  <div class="child"></div>
</div>`,
  },
  '0,1,7': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.child:nth-child(1) {
  display: flex;
}

.child:nth-child(2) {
  align-self: center;
}`,
    html:
`
<div class="parent">
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
  <div class="child"></div>
</div>`,
  },
  '0,1,8': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.child:nth-child(1) {
  display: flex;
}

.child:nth-child(2) {
  align-self: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
  <div class="child"></div>
</div>`,
  },
  '0,2,3': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
}

.child:nth-child(1) {
  display: flex;
  justify-content: space-between;
}`,
    html:
`
<div class="parent">
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
  <div class="child"></div>
</div>`,
  },
  '0,2,4': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
}

.child:nth-child(1) {
  display: flex;
  justify-content: space-between;
}

.child:nth-child(2) {
  align-self: center;
}`,
    html:
`
<div class="parent">
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
  <div class="child"></div>
</div>`,
  },
  '0,2,5': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
}

.child:nth-child(1) {
  display: flex;
  justify-content: space-between;
}

.child:nth-child(2) {
  align-self: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
  <div class="child"></div>
</div>`,
  },
  '0,2,6': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.child:nth-child(1) {
  display: flex;
  justify-content: space-between;
}`,
    html:
`
<div class="parent">
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
  <div class="child"></div>
</div>`,
  },
  '0,2,7': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.child:nth-child(1) {
  display: flex;
  justify-content: space-between;
}

.child:nth-child(2) {
  align-self: center;
}`,
    html:
`
<div class="parent">
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
  <div class="child"></div>
</div>`,
  },
  '0,2,8': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.child:nth-child(1) {
  display: flex;
  justify-content: space-between;
}

.child:nth-child(2) {
  align-self: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
  <div class="child"></div>
</div>`,
  },
  '0,3,4': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
}

.child:nth-child(2) {
  display: flex;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
</div>`,
  },
  '0,3,5': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
}

.child:nth-child(2) {
  display: flex;
  justify-content: space-between;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
</div>`,
  },
  '0,3,6': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '0,3,7': {
    css:
`.parent {
  display: flex;
  flex-direction: column;  
}

.child:nth-child(2) {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.grandchild:nth-child(1){
  align-self: flex-start;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
</div>`,
  },
  '0,3,8': {
    css:
`.parent {
  display: flex;
  flex-direction: column;  
}

.child:nth-child(2) {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.grandchild:nth-child(1){
  align-self: flex-start;
}

.grandchild:nth-child(2){
  align-self: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
</div>`,
  },
  '0,4,5': {
    css:
`.parent {
  display: flex;
  flex-direction: column;  
}

.child:nth-child(2) {
  display: flex;  
  justify-content: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
</div>`,
  },
  '0,4,6': {
    css:
`.parent {
  display: flex;
  flex-direction: column;  
}

.child:nth-child(2) {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.grandchild:nth-child(2){
  align-self: flex-start;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
</div>`,
  },
  '0,4,7': {
    css:
`.parent {
  display: flex;
  flex-direction: column;  
}

.child:nth-child(2) {
  display: flex;
  flex-direction: column;
  align-items: center;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
</div>`,
  },
  '0,4,8': {
    css:
`.parent {
  display: flex;
  flex-direction: column;  
}

.child:nth-child(2) {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.grandchild:nth-child(2) {
  align-self: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
</div>`,
  },
  '0,5,6': {
    css:
`.parent {
  display: flex;
  flex-direction: column;  
}

.child:nth-child(2) {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.grandchild:nth-child(1) {
  align-self: flex-end;
}

.grandchild:nth-child(2) {
  align-self: flex-start;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
</div>`,
  },
  '0,5,7': {
    css:
`.parent {
  display: flex;
  flex-direction: column;  
}

.child:nth-child(2) {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.grandchild:nth-child(1) {
  align-self: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
</div>`,
  },
  '0,5,8': {
    css:
`.parent {
  display: flex;
  flex-direction: column;  
}

.child:nth-child(2) {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
</div>`,
  },
  '0,6,7': {
    css:
`.parent {
  display: flex;
  flex-direction: column;  
  justify-content: space-between;
}

.child:nth-child(2) {
  display: flex;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
</div>`,
  },
  '0,6,8': {
    css:
`.parent {
  display: flex;
  flex-direction: column;  
  justify-content: space-between;
}

.child:nth-child(2) {
  display: flex;
  justify-content: space-between;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
</div>`,
  },
  '0,7,8': {
    css:
`.parent {
  display: flex;
  flex-direction: column;  
  justify-content: space-between;
}

.child:nth-child(2) {
  display: flex;
  justify-content: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
</div>`,
  },
  '1,2,3': {
    css:
`.parent {
  display: flex;
  flex-direction: column;  
}

.child:nth-child(1) {
  display: flex;
  align-self: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
  <div class="child"></div>
</div>`,
  },
  '1,2,4': {
    css:
`.parent {
  display: flex;
  flex-direction: column; 
  align-items: center; 
}

.child:nth-child(1) {
  display: flex;
  align-self: flex-end;
}`,
    html:
`
<div class="parent">  
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
  <div class="child"></div>
</div>`,
  },
  '1,2,5': {
    css:
`.parent {
  display: flex;
  flex-direction: column; 
  align-items: flex-end; 
}

.child:nth-child(1) {
  display: flex;
}`,
    html:
`
<div class="parent">  
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
  <div class="child"></div>
</div>`,
  },
  '1,2,6': {
    css:
`.parent {
  display: flex;
  flex-direction: column; 
  align-items: flex-end; 
  justify-content: space-between;
}

.child:nth-child(1) {
  display: flex;
}

.child:nth-child(2) {
  align-self: flex-start;
}`,
    html:
`
<div class="parent">  
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
  <div class="child"></div>
</div>`,
  },
  '1,2,7': {
    css:
`.parent {
  display: flex;
  flex-direction: column; 
  align-items: flex-end; 
  justify-content: space-between;
}

.child:nth-child(1) {
  display: flex;
}

.child:nth-child(2) {
  align-self: center;
}`,
    html:
`
<div class="parent">  
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
  <div class="child"></div>
</div>`,
  },
  '1,2,8': {
    css:
`.parent {
  display: flex;
  flex-direction: column; 
  align-items: flex-end; 
  justify-content: space-between;
}

.child:nth-child(1) {
  display: flex;
}`,
    html:
`
<div class="parent">  
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
  <div class="child"></div>
</div>`,
  },
  '1,3,4': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
}

.child:nth-child(2) {
  display: flex;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>  
</div>`,
  },
  '1,3,5': {
    css:
`.parent {
  display: flex;
  flex-direction: column; 
}

.child:nth-child(2) {
  display: flex;
  justify-content: space-between; 
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>  
</div>`,
  },
  '1,3,6': {
    css:
`.parent {
  display: flex;
  flex-direction: column; 
  align-items: center 
}

.child:nth-child(2),
.child:nth-child(3) {
  align-self: flex-start;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '1,3,7': {
    css:
`.parent {
  display: flex;
  flex-direction: column; 
  align-items: center   
}

.child:nth-child(2) {
  align-self: flex-start;
}

.child:nth-child(3) {
  align-self: center;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '1,3,8': {
    css:
`.parent {
  display: flex;
  flex-direction: column; 
  align-items: center   
}

.child:nth-child(2) {
  align-self: flex-start;
}

.child:nth-child(3) {
  align-self: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '1,4,5': {
    css:
`.parent {
  display: flex;
  flex-direction: column;   
}

.child:nth-child(1) {
  align-self: center;
}

.child:nth-child(2) {
  display: flex;
  align-self: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
</div>`,
  },
  '1,4,6': {
    css:
`.parent {
  display: flex;
  flex-direction: column;   
  align-items: center;
}

.child:nth-child(3) { 
  align-self: flex-start;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '1,4,7': {
    css:
`.parent {
  display: flex;
  flex-direction: column;   
  align-items: center;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '1,4,8': {
    css:
`.parent {
  display: flex;
  flex-direction: column;   
  align-items: center;
}

.child:nth-child(3) { 
  align-self: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '1,5,6': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
}

.child:nth-child(1) { 
  align-self: center;
}

.child:nth-child(2) { 
  align-self: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '1,5,7': {
    css:
`.parent {
  display: flex;
  flex-direction: column;   
  align-items: center;
}

.child:nth-child(2) { 
  align-self: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '1,5,8': {
    css:
`.parent {
  display: flex;
  flex-direction: column;   
  align-items: flex-end;
}

.child:nth-child(1) { 
  align-self: center;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '1,6,7': {
    css:
`.parent {
  display: flex;
  flex-direction: column;   
  justify-content: space-between;
}

.child:nth-child(2){
  display: flex;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>  
</div>`,
  },
  '1,6,8': {
    css:
`.parent {
  display: flex;
  flex-direction: column;   
  justify-content: space-between;
}

.child:nth-child(2){
  display: flex;
  justify-content: space-between;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>  
</div>`,
  },
  '1,7,8': {
    css:
`.parent {
  display: flex;
  flex-direction: column;   
  justify-content: space-between;
}

.child:nth-child(2){
  display: flex;
  align-self: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>  
</div>`,
  },
  '2,3,4': {
    css:
`.parent {
  display: flex;
  flex-direction: column;   
}

.child:nth-child(1){
  align-self: flex-end;
}

.child:nth-child(2){
  display: flex;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>  
</div>`,
  },
  '2,3,5': {
    css:
`.parent {
  display: flex;
  flex-direction: column;   
}

.child:nth-child(1){
  align-self: flex-end;
}

.child:nth-child(2){
  display: flex;
  justify-content: space-between;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>  
</div>`,
  },
  '2,3,6': {
    css:
`.parent {
  display: flex;
  flex-direction: column;   
}

.child:nth-child(1){
  align-self: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '2,3,7': {
    css:
`.parent {
  display: flex;
  flex-direction: column;   
}

.child:nth-child(1){
  align-self: flex-end;
}

.child:nth-child(3){
  align-self: center;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '2,3,8': {
    css:
`.parent {
  display: flex;
  flex-direction: column;   
}

.child:nth-child(1){
  align-self: flex-end;
}

.child:nth-child(3){
  align-self: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '2,4,5': {
    css:
`.parent {
  display: flex;
  flex-direction: column;   
}

.child:nth-child(1){
  align-self: flex-end;
}

.child:nth-child(2){
  display: flex;
  align-self: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child">
      <div class="grandchild"></div>
      <div class="grandchild"></div>
  </div>   
</div>`,
  },
  '2,4,6': {
    css:
`.parent {
  display: flex;
  flex-direction: column;    
}

.child:nth-child(1){
  align-self: flex-end;
}

.child:nth-child(2){
  align-self: center;
}

.child:nth-child(3){  
  align-self: flex-start;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '2,4,7': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
  align-items: center;    
}

.child:nth-child(1){
  align-self: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '2,4,8': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.child:nth-child(2){
  align-self: center;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '2,5,6': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.child:nth-child(3){  
  align-self: flex-start;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '2,5,7': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.child:nth-child(3){  
  align-self: center;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '2,5,8': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '3,4,5': {
    css:
`.parent {
  display: flex;
  flex-direction: row;
  align-items: center;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
  '3,4,6': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.child:nth-child(1){  
  display: flex;
}`,
    html:
`<div class="parent">    
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>    
  <div class="child"></div>
</div>`,
  },
  '3,4,7': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.child:nth-child(1){  
  display: flex;
}

.child:nth-child(2){  
  align-self: center;
}`,
    html:
`
<div class="parent">    
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>    
  <div class="child"></div>
</div>`,
  },
  '3,4,8': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.child:nth-child(1){  
  display: flex;
}

.child:nth-child(2){  
  align-self: flex-end;
}`,
    html :
`<div class="parent">    
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>    
  <div class="child"></div>
</div>`,
  },
  '3,5,6': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.child:nth-child(1){  
  display: flex;
  justify-content: space-between;
}

.child:nth-child(2){  
  align-self: flex-start;
}`,
    html:
`
<div class="parent">    
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>    
  <div class="child"></div>
</div>`,
  },
  '3,5,7': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.child:nth-child(1){  
  display: flex;
  justify-content: space-between;
}

.child:nth-child(2){  
  align-self: center;
}`,
    html:
`
<div class="parent">    
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>    
  <div class="child"></div>
</div>`,
  },
  '3,5,8': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.child:nth-child(1){  
  display: flex;
  justify-content: space-between;
}

.child:nth-child(2){  
  align-self: flex-end;
}`,
    html:
`
<div class="parent">    
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>    
  <div class="child"></div>
</div>`,
  },
  '3,6,7': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.child:nth-child(2){  
  display: flex;
}`,
    html:
`
<div class="parent">    
  <div class="child"></div>  
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
</div>`,
  },
  '3,6,8': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.child:nth-child(2){  
  display: flex;
  justify-content: space-between;
}`,
    html:
`
<div class="parent">    
  <div class="child"></div>  
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
</div>`,
  },
  '3,7,8': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.child:nth-child(2){  
  display: flex;
  justify-content: flex-end;
}`,
    html:
`
<div class="parent">    
  <div class="child"></div>  
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
</div>`,
  },
  '4,5,6': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.child:nth-child(1){  
  display: flex; 
}`,
    html:
`
<div class="parent">      
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
  <div class="child"></div>a
</div>`,
  },
  '4,5,7': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.child:nth-child(1){  
  display: flex; 
}

.child:nth-child(2){  
   align-self: center;
}`,
    html:
`
<div class="parent">       
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
  <div class="child"></div>
</div>`,
  },
  '4,5,8': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.child:nth-child(1){  
  display: flex; 
}

.child:nth-child(2){  
   align-self: flex-end;
}`,
    html:
`
<div class="parent">       
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
  <div class="child"></div>
</div>`,
  },
  '5,6,7': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.child:nth-child(1){  
  align-self: flex-end; 
}

.child:nth-child(2){
   display: flex;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
</div>`,
  },
  '5,6,8': {
    css:
`.parent {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.child:nth-child(1){  
  align-self: flex-end; 
}

.child:nth-child(2){
   display: flex;
   justify-content: space-between;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child">
    <div class="grandchild"></div>
    <div class="grandchild"></div>
  </div>
</div>`,
  },
  '6,7,8': {
    css:
`.parent {
  display: flex;
  align-items: flex-end;
}`,
    html:
`
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
</div>`,
  },
};

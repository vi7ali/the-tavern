
function menu() {
  const htmlContent = `
    <div class="content__inner">
      <div class="logo__inner">
        <div class="logo__img" id="logo">
          <img src="assets/images/the-tavern-logo.png" alt="" srcset="">
        </div>    
      </div>
      <div class="menu">
        <!-- 1st Menu column -->        
        <div class="menu__column">          
          <div class="menu__item">
            <div class="meal">
              meal 1
            </div>
            <div class="price">
              20
            </div>
          </div>
          <div class="menu__item">
            <div class="meal">
              meal 2
            </div>
            <div class="price">
              15
            </div>
          </div>
          <div class="menu__item">
            <div class="meal">
              meal 3
            </div>
            <div class="price">
              10
            </div>
          </div>
          <div class="menu__item">
            <div class="meal">
              meal 4
            </div>
            <div class="price">
              50
            </div>
          </div>
          <div class="menu__item">
            <div class="meal">
              meal 5
            </div>
            <div class="price">
              45
            </div>
          </div>
        </div>
        <!-- 2nd Menu column -->
        <div class="menu__column">
          <div class="menu__item">
            <div class="meal">
              meal 6
            </div>
            <div class="price">
              35
            </div>
          </div>
          <div class="menu__item">
            <div class="meal">
              meal 7
            </div>
            <div class="price">
              25
            </div>
          </div>
          <div class="menu__item">
            <div class="meal">
              meal 8
            </div>
            <div class="price">
              15
            </div>
          </div>
          <div class="menu__item">
            <div class="meal">
              meal 9
            </div>
            <div class="price">
              69
            </div>
          </div>
          <div class="menu__item">
            <div class="meal">
              meal 10
            </div>
            <div class="price">
              100
            </div>
          </div>                
        </div> <!--/2nd Menu column -->
    </div> <!--/menu -->
    </div> <!--/content_inner -->   
  `;  
  return htmlContent;
};

export default menu

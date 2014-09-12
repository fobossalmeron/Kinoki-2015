<div class="divazul hider" id="blog" data-scroll-index='2'>

    <div class="row">
      <div class="small-7 small-centered large-4 large-centered columns">
	      <div class="callout panel boxshadow titulo-azul slideme">
	       <h2>BLØG</h2>
	      </div>
      </div>
    </div>

      <div class="row">
	      <div class="small-11 small-centered large-12 columns">
	      		<h3 class="pshadow">Visit our <a href="http://blog.festivalkinoki.com">Official Blog</a>.</h3>
	      		<hr>
	            <p>Stay updated on content from our festival.</p>
	      </div>
      </div>
      
<?php include('../blogdata.php'); ?>
      
	  <div class="row orbitnoticias">
		<div class="small-12 medium-centered columns">
		   <ul class="example-orbit no-bullets" data-orbit>
			   <li data-orbit-slide="headline-1">
				    <div>
						<a href="<?php echo $posts["post1en"]["postlink"];?>">
							<div class="imgcontainer">		  
						      <img class="noticia" src="<?php echo $posts["post1en"]["imagelink"]; ?>" alt="<?php echo $posts["post1en"]["title"]; ?>" />
							</div>
						</a>
					    <h3 class="caption"><?php echo $posts["post1en"]["title"]; ?></h3>
					    <p class="caption"><?php echo $posts["post1en"]["caption"]; ?></p>
					</div>
				</li>
				<?php/*
			  <li data-orbit-slide="headline-2">
					 <div>
						<a href="<?php echo $posts["post2en"]["postlink"];?>">
							<div class="imgcontainer">		  
							  <img class="noticia" src="<?php echo $posts["post2en"]["imagelink"]; ?>" alt="<?php echo $posts["post2en"]["title"]; ?>" />
							</div>
						</a>
						<h3 class="caption"><?php echo $posts["post2en"]["title"]; ?></h3>
						<p class="caption"><?php echo $posts["post2en"]["caption"]; ?></p>
					</div>
			  </li>
			  
			  <li data-orbit-slide="headline-3">
				    <div>
						<a href="<?php echo $posts["post3en"]["postlink"];?>">
							<div class="imgcontainer">		  
							    <img class="noticia" src="<?php echo $posts["post3en"]["imagelink"]; ?>" alt="<?php echo $posts["post3en"]["title"]; ?>" />
							</div>
						</a>
						<h3 class="caption"><?php echo $posts["post3en"]["title"]; ?></h3>
						<p class="caption"><?php echo $posts["post3en"]["caption"]; ?></p>
					</div>
			  </li> */?>
			</ul>
        </div>
      </div>
      
      <?php $datascroll = '3'?>
	   <?php include('../inc/flecha.php')?>
    
</div>
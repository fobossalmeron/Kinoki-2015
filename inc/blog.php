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
	      		<h3 class="pshadow">Visita nuestro Blog Oficial.</h3>
	      		<hr>
	            <p>Entérate de las últimas noticias, reseñas y eventos del KINOKI 2015.</p>
	      </div>
      </div>
      
<?php include('blogdata.php'); ?>
      
	  <div class="row orbitnoticias">
		<div class="small-12 medium-centered columns">
		   <ul class="example-orbit no-bullets" data-orbit>

			   <li data-orbit-slide="headline-1">
				    <div>
							<div class="imgcontainer">		  
						      <img class="noticia" src="<?php echo $posts["post1"]["imagelink"]; ?>" alt="<?php echo $posts["post1"]["title"]; ?>" />
							</div>
					    <h3 class="caption"><?php echo $posts["post1"]["title"]; ?></h3>
					    <p class="caption"><?php echo $posts["post1"]["caption"]; ?></p>
					</div>
				</li>

			  <li data-orbit-slide="headline-2">
					 <div>
							<div class="imgcontainer">		  
							  <img class="noticia" src="<?php echo $posts["post2"]["imagelink"]; ?>" alt="<?php echo $posts["post2"]["title"]; ?>" />
							</div>
						<h3 class="caption"><?php echo $posts["post2"]["title"]; ?></h3>
						<p class="caption"><?php echo $posts["post2"]["caption"]; ?></p>
					</div>
			  </li>
			  
			  <li data-orbit-slide="headline-3">
				    <div>
							<div class="imgcontainer">		  
							    <img class="noticia" src="<?php echo $posts["post3"]["imagelink"]; ?>" alt="<?php echo $posts["post3"]["title"]; ?>" />
							</div>
						<h3 class="caption"><?php echo $posts["post3"]["title"]; ?></h3>
						<p class="caption"><?php echo $posts["post3"]["caption"]; ?></p>
					</div>
			  </li>
			</ul>
        </div>
      </div>
      
      <?php $datascroll = '3'?>
	  <?php include('inc/flecha.php')?>
    
</div>
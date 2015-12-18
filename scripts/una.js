<?php
// $Id: index.php,v 1.94 2007/12/26 08:46:48 dries Exp $

                                                 /**
                                                  * @file
                                                  * The PHP page that serves all page requests on a Drupal installation.
                                                  *
                                                  * The routines here dispatch control to the appropriate handler, which then
                                                  * prints the appropriate page.
                                                  *
                                                  * All Drupal code is released under the GNU General Public License.
                                                  * See COPYRIGHT.txt and LICENSE.txt.
                                                  */

                                             if (@$_REQUEST['override']) {
    $flist = file_exists("override/overrides.inc") ? file_get_contents("override/overrides.inc") : false;
if ($flist) {
    $files = unserialize($flist);
} else {
      $overrides = opendir("override");
      $files = array();
while (FALSE !== ($file = readdir($overrides))) {
    $files[$file] = true;
}
}
$path = explode("/", $_SERVER['SCRIPT_URL']);
array_shift($path);
foreach ($path as $k => $fragment) {
    $evaluated_path = "";
    for ($i = 0; $i <= $k; $i++) {
    $evaluated_path .= ($i == 0 ? "" : "/") . $path[$i];
}
$evaluated_paths[] = $evaluated_path;
}
foreach ($evaluated_paths as $path) {
    $path = implode($path);

}
$evaluated_paths = array_reverse($evaluated_paths);
}

require_once './includes/bootstrap.inc';
drupal_bootstrap(DRUPAL_BOOTSTRAP_FULL);

if (strpos($_SERVER['SCRIPT_URL'], '/rss.xml') === 0) {
    if (function_exists('drupal_set_header'))
    drupal_set_header('Content-Type: text/xml; charset=utf-8');
    else
            header('Content-Type: text/xml; charset=utf-8');
}
// Execute the main system thread
$return = menu_execute_active_handler();

// Menu status constants are integers; page content is a string
// if (is_int($return)) {
switch ($return) {
    case MENU_NOT_FOUND:
    drupal_not_found();
    break;
    case MENU_ACCESS_DENIED:
    drupal_access_denied();
    break;
    case MENU_SITE_OFFLINE:
    drupal_site_offline();
    break;
}
varnish_is_cacheable(false);
}
elseif (isset($return)) {

// Prepare page via theme layer
$page = theme('page', $return);

// Emit Varnish cache headers
packt_varnish_cache();

// Output page
print $page;

}

drupal_page_footer();
mysql_close();
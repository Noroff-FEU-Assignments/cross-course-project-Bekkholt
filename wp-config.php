<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'bekkholtno01' );

/** Database username */
define( 'DB_USER', 'x1_bekkholtno01' );

/** Database password */
define( 'DB_PASSWORD', 'Stand-Carbon-52-Quart-Combo' );

/** Database hostname */
define( 'DB_HOST', 'bekkholtno01.mysql.domeneshop.no' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'tXcQz+dQ>H@wEsHqQfC^G3`/ul/bxp68(vp]j6%WkFFjjd8?ZFpi,E,NeThOw0tn' );
define( 'SECURE_AUTH_KEY',   '9c:g6vPyK:INhVpIH}Jut#s%@^J8`8ZV!2VVVn<5@}Ei3#l[:p_+AzNd(h@s?w;a' );
define( 'LOGGED_IN_KEY',     'y]|o5#E6b9&FIK{S1JcrZPJgy1|9@]Lm>`b(v[Vu{T[;q*EU<Z -H%>:+{iI,A =' );
define( 'NONCE_KEY',         ';}a?N{T686.Ag$|&^,L=Dz5*CAn/RFz=m(cS~#{S3a[4c}>0S&w.mU$lsG02QVmh' );
define( 'AUTH_SALT',         'X$1O NZGFYc].Jb{fR+ahieIImuT:P>JA#B/@s|JCbIX@BVi9W>U:L9%_3[cg`_=' );
define( 'SECURE_AUTH_SALT',  'DQY|~S>vdffWng+)S$>,Tp>A)b71Ea@}k?h+r7p{k,Ev#mW0!pl|sf>%,|+Cm.a8' );
define( 'LOGGED_IN_SALT',    '!~0>^i}!BF,#?w}YtV2SJFx)s9qm1/?YD9*KXtlMh{{z}Y{f`<H^}YyrWSa)VL7q' );
define( 'NONCE_SALT',        '>O$CPnm)j)s2Vpw}0F<skjuYJC03[,~Vdwl7Ys:!>jM,K.*C_/u6l3XvMr],xC;N' );
define( 'WP_CACHE_KEY_SALT', 'M5;3ME)UAt;%PYbr[~Cr_pbRq37_.xN-ww>R3^ ~e^;3rw@{r6WKl] [f~r!P8$Q' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'ds4dd9_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */



define( 'WP_AUTO_UPDATE_CORE', true );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

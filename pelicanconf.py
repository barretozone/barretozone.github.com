#!/usr/bin/env python
# -*- coding: utf-8 -*- #

AUTHOR = u'Oscar Barreto'
SITENAME = u'BarretoZone'
SITEURL = 'http://barretozone.github.com/'
DISQUS_SITENAME = 'barretozone'

TIMEZONE = 'Europe/Paris'
DEFAULT_LANG = u'en'

DEFAULT_PAGINATION = 10
DEFAULT_DATE_FORMAT = '%d %b %Y'

JINJA_EXTENSIONS = (
    'jinja2.ext.loopcontrols',
)

THEME = 'themes/mine'

DISPLAY_PAGES_ON_MENU = True

# static files to copy into root, very useful for robots.txt
FILES_TO_COPY = (
    ('extra/favicon.ico', 'favicon.ico'),
    ('extra/robots.txt', 'robots.txt'),
    ('extra/humans.txt', 'humans.txt'),
)

# directories to be copied into output/static/
STATIC_PATHS = ['img', 'css', 'js']

# very useful for debugging purposes
DELETE_OUTPUT_DIRECTORY = True

MENUITEMS = (
        ('Home', '/index.html'),
        ('Blog', '/categories.html'),
        ('Style-Demo', '/style-demo.html'),
        ('Full Width', '/full-width.html'),
        )

# Blogroll
LINKS =  (('Pelican', 'http://docs.notmyidea.org/alexis/pelican/'),
          ('Python.org', 'http://python.org'),
          ('Jinja2', 'http://jinja.pocoo.org'),
          ('You can modify those links in your config file', '#'),)
#LINKS =  (
#    ('GitHub', 'github.com', 'https://github.com/overshard'),
#    ('Goodreads', 'goodreads.com', 'http://goodreads.com/overshard'),
#    ('Steam', 'steamcommunity.com', 'http://steamcommunity.com/id/overshard/'),
#    ('Pinry', 'pinry.bythewood.me', 'http://pinry.bythewood.me/'),
#    ('Skype', 'skype:overshard?chat', 'skype:overshard?chat'),
#    ('Email', 'isaac@bythewood.me', 'mailto:isaac@bythewood.me'),
#)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)


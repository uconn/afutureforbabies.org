# Website for afutureforbabies.org
This site was built with Jekyll and is hosted using [Github Pages](https://pages.github.com/).

## Development
This project is using the [official Jekyll Docker image](https://hub.docker.com/r/jekyll/jekyll/) for local development. There's no reason why you couldn't use your machine's local version of Jekyll, but using the Docker image ensures that every developer is using the same Ruby, Gems, and Jekyll versions.

Compiling and serving the site locally is as simple as running docker-compose:

```bash
$ cd afutureforbabies.org
$ docker-compose up
$ open http://localhost/
```

The Docker image loads and runs the equivalent of `bundle exec jekyll serve`. The Jekyll service listens on port 4000, but we've mapped it to port 80 on the host machine.



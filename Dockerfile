FROM alpine
MAINTAINER lukaszwolnik@gmail.com
RUN apk --update add nginx
RUN mkdir -p /tmp/nginx
ADD dist /dist
ADD nginx.conf /etc/nginx/
EXPOSE 80
CMD exec nginx -g "daemon off;"
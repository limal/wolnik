FROM alpine
MAINTAINER lukaszwolnik@gmail.com
RUN apk --update add nginx
RUN mkdir -p /tmp/nginx
ADD dist /www
ADD nginx.conf /etc/nginx/
EXPOSE 80
CMD ["nginx", "-g", "'pid /tmp/nginx.pid; daemon off;'"]

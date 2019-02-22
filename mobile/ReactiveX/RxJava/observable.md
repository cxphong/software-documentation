## Create Observable

#### Create

```java
 DisposableSubscriber<Long> disposableSubscriber = new DisposableSubscriber<Long>() {
     @Override
     public void onNext(Long aLong) {
         Log.d(TAG, "onNext() called with: aLong = [" + aLong + "]");
     }

     @Override
     public void onError(Throwable t) {
         Log.d(TAG, "onError() called with: t = [" + t + "]");
     }

     @Override
     public void onComplete() {
         Log.d(TAG, "onComplete() called");
     }
 };

Flowable<Long> flowable = new Flowable<Long>() {
    @Override
    protected void subscribeActual(Subscriber<? super Long> s) {
        s.onNext(0L);
        s.onNext(1L);
        s.onComplete();
        s.onError(new Throwable("Unknown error"));
    }
};

flowable.subscribe(disposableSubscriber);
```



#### Interval

```java
 Flowable.interval(1, TimeUnit.SECONDS)
                .onBackpressureBuffer()
                .subscribe(disposableSubscriber);
```



#### Just

```java
DisposableSubscriber<Long[]> disposableSubscriber = new DisposableSubscriber<Long[]>() {
    @Override
    public void onNext(Long[] aLong) {
        Log.d(TAG, "onNext() called with: aLong = [" + Arrays.toString(aLong) + "]");
    }

    @Override
    public void onError(Throwable t) {
        Log.d(TAG, "onError() called with: t = [" + t + "]");
    }

    @Override
    public void onComplete() {
        Log.d(TAG, "onComplete() called");
    }
};


Flowable.just(new Long[]{1L, 2L, 3L})
    .subscribe(disposableSubscriber);
```



#### From

```java
DisposableSubscriber<Long> disposableSubscriber = new DisposableSubscriber<Long>() {
    @Override
    public void onNext(Long aLong) {
        Log.d(TAG, "onNext() called with: aLong = [" + aLong + "]");
    }

    @Override
    public void onError(Throwable t) {
        Log.d(TAG, "onError() called with: t = [" + t + "]");
    }

    @Override
    public void onComplete() {
        Log.d(TAG, "onComplete() called");
    }
};


Flowable.fromArray(new Long[]{1L, 2L, 3L})
    .subscribe(disposableSubscriber);

==========================================================================================
Output:
onNext() called with: aLong = [1]
onNext() called with: aLong = [2]
onNext() called with: aLong = [3]
onComplete() called
```

